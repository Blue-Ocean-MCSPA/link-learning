'use client';
import { useEffect, useState } from 'react';
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";


export default function Submit() {
    const senderId = 4;
    const recipientId = 10;
    const time_stamp = new Date();
    const [deleteMessage, setDeleteMessage] = useState('');
    const [newMessage, setNewMessage] = useState('')
    const [message, setMessages] = useState('')
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
            console.log(data.data.rows)
            setStudents(data.data.rows);
        }
        getMessage();
        getStudents();
    }, [])
    const getMessage = async () => {
        const res = await fetch('/api/messages');
        const data = await res.json();
        console.log(data.data.rows)
        setMessages(data.data.rows);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(name, age)
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

    const handleMessage = async (e) => {
        e.preventDefault();
        console.log(newMessage);
        const res = await fetch('/api/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                senderid: senderId,
                recipientid: recipientId,
                time_stamp: time_stamp,
                message: newMessage
            })
        });
    
        const data = await res.json();
    
        setMessages(prevMessages => [
            ...prevMessages, 
            {
                id: data.id, 
                senderid: data.senderid, 
                recipientid: data.recipientid, 
                time_stamp: data.time_stamp, 
                message: data.message
            }
        ]);
    
        setNewMessage('');
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
        setDeleteMessage(message);
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
            console.log(data);
            setEditedAge('');
            setEditedName('');
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

    const handleDeleteMessages = async (e) => {
        e.preventDefault();
        const id = deleteMessage.id; // Assuming deleteMessage contains the message to delete
        console.log(id);
        try {
            const res = await fetch(`/api/messages`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id }), // Send the ID in the request body
            });
            
            setDeleteMessage("")
            if (res.ok) {
                console.log('delete request sent successfully');
            } else {
                // If response status is not OK, handle the error
                console.error('Failed to delete message');
            }
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
                    <input type="text" value={editedName} placeholder="First Name" onChange={(e) => setEditedName(e.target.value)}/>
                    <input type="text" value={editedAge} placeholder="Age" onChange={(e) => setEditedAge(e.target.value)}/>
                    <button onClick={handleEdit}>Update</button>
                    <button onClick={handleDelete}>DELETE</button>
                </form>
                <form onSubmit={handleMessage}>
                    <input type="text" value={newMessage} placeholder="Enter your message" onChange={(e) => setNewMessage(e.target.value)}/>
                    <button >Send</button>
                </form>

                <ul>
                {message && message.map((msg) => {
                console.log(msg) 
                    return (<>
                    <li key={msg.id}>{msg.message}</li>
                    <button onClick={handleDeleteMessages}>DELETE</button>
                    </>
                    )
                }
                    
                )}
                </ul>
                
            </div>
        </div>
    )
} 

// const [user1, setUser1] = useState({recipient})
//const [user2, setUser2] = useState({sender)};
//

