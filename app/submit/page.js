'use client';
import { useEffect, useState } from 'react';
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import { sql } from '@vercel/postgres';

export default function Submit() {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [students, setStudents] = useState([]);
    const [selected, setSelected] = useState('');

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
    }

    const handleDelete = async (studentID) => {
        const res = await fetch(`/api/students/${id}`, {
            method: 'DELETE',
            });
            if (res.ok) {
                setStudents(students.filter(student => student.id !== studentID));
            } else {
                console.error('Failed to delete student');
            }
    }

    const handleName = (e) => {
        setName(e.target.value);
    }
    const handleAge = (e) => {
        setAge(e.target.value);
    }
    const handleClick = (e) => {
        console.log(e.target.getAttribute('data-id'));
        console.log(e.target.textContent);
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
                <DropdownMenu aria-label="Static Actions" onClick={handleClick}>
                    {
                        students.map((student) => {
                            return (
                                <DropdownItem key={student.id} data-id={student.id}>{student.name}</DropdownItem>
                            )
                        })
                    }
                </DropdownMenu>
            </Dropdown>
                <h3>Update Student info</h3>
                <form>
                    <input type="text" placeholder="First Name"/>
                    <input type="text" placeholder="Age"/>
                    <button>Update</button>
                </form>
            </div>
            <div>
                <form>
                
                <button>Remove</button>
                </form>
            </div>
        </div>
    )
}