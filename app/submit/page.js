'use client';
import { useEffect, useState } from 'react';
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import { sql } from '@vercel/postgres';

export default function Submit() {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [students, setStudents] = useState([]);
    const [selected, setSelected] = useState('');
    const [editedName, setEditedName] = useState('');
    const [editedAge, setEditedAge] = useState('');

    useEffect(() => {
        async function getStudents() {
            const res = await fetch('/api/students');
            const data = await res.json();
            setStudents(data.result.rows);
        }
        getStudents();
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch('/api/students', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, age }),
        });
        const data = await res.json();
        console.log(data);
        setAge('');
        setName('');
    }

    const handleName = (e) => {
        setName(e.target.value);
    }
    const handleAge = (e) => {
        setAge(e.target.value);
    }

    const handleClick = (student) => {
        setSelected(student);
        setEditedName(student.name);
        setEditedAge(student.age);
    }

    const handleEdit = async (e) => {
        e.preventDefault();
        const id = selected.id;
        console.log(editedAge, editedName, id)

            const res = await fetch(`/api/students`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id, editedName, editedAge }),
            })
            const data = await res.json();
            console.log('edit request sent')

        setEditedAge('');
        console.log(editedAge, editedName, id)
    }

    const handleDelete = async (e) => {
        e.preventDefault();
        const id = selected.id;
        console.log(id)
        try {
            const res = await fetch(`/api/students`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id }),
            });
            const data = await res.json();
            console.log(data);
            console.log('delete request sent')
            setEditedName('');
            setEditedAge('');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <h1>Hello World</h1>
                <p>Submit your student info here</p>
            <form onSubmit={handleSubmit}>
                <input type="text" value = {name} placeholder="First Name" onChange={handleName}/>
                <input type="text" value = {age} placeholder="Age" onChange={handleAge}/>
            <button type='submit'>Submit</button>
            </form>
            <div>
            <Dropdown>
                <DropdownTrigger>
                    <Button 
                    variant="bordered" 
                    >
                    Select Student
                    </Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions">
                    {
                        students.map((student) => {
                            return (
                                <DropdownItem key={student.id} textValue={student.name} onClick={() => {handleClick(student)}}>{student.name}</DropdownItem>
                            )
                        })
                    }
                </DropdownMenu>
            </Dropdown>
                <h3>Change student info</h3>
                <form>
                    <input type="text" defaultValue={editedName} placeholder="First Name" onChange={(e) => setEditedName(e.target.value)}/>
                    <input type="text" defaultValue={editedAge} placeholder="Age" onChange={(e) => setEditedAge(e.target.value)}/>
                    <button onClick={handleEdit}>Update</button>
                    <button onClick={handleDelete}>DELETE</button>
                </form>
            </div>
        </div>
    )
} 