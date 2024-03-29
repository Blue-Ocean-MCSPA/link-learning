"use client"

import { useEffect, useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

export default function Submit() {
    const senderId = 4;
  const recipientId = 10;
  const time_stamp = new Date();
  const [editMessage, setEditMessage] = useState("");
  const [deleteMessage, setDeleteMessage] = useState("");
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [selectedMessage, setSelectedMessage] = useState(null); // Track the selected message separately

  useEffect(() => {
    getMessage();
  }, []);

  const getMessage = async () => {
    const res = await fetch("/api/messages");
    const data = await res.json();
    setMessages(data.data.rows);
  };

  const handleMessageSubmit = async (e) => {
    e.preventDefault();
    // console.log(newMessage);
    const res = await fetch("/api/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        senderid: senderId,
        recipientid: recipientId,
        time_stamp: time_stamp,
        message: newMessage,
      }),
    });

    const data = await res.json();

    setMessages((prevMessages) => [
      ...prevMessages,
      {
        id: data.id,
        senderid: data.senderid,
        recipientid: data.recipientid,
        time_stamp: data.time_stamp,
        message: data.message,
      },
    ]);

    setNewMessage("");
    console.log("Message sent:", data); // Log the message data after it's sent
  };

  const handleEditMessage = async () => {
    if (!selectedMessage) return; // Ensure a message is selected
    const updatedMessage = { ...selectedMessage, message: editMessage }; // Update the message content
    const res = await fetch(`/api/messages/${selectedMessage.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedMessage),
    });
    if (res.ok) {
      setMessages((prevMessages) =>
        prevMessages.map((msg) =>
          msg.id === updatedMessage.id ? updatedMessage : msg
        )
      ); // Update the message in the state
      setEditMessage(""); // Clear the edit message field after update
    } else {
      console.error("Failed to update message");
    }
  };

  const handleDeleteMessage = async () => {
    if (!deleteMessage) return; // Ensure a message is selected for deletion
  
    try {
      const res = await fetch(`/api/messages/${deleteMessage.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (res.ok) {
        console.log("Message deleted successfully");
        setMessages((prevMessages) =>
          prevMessages.filter((msg) => msg.id !== deleteMessage.id)
        ); // Update the messages state after successful deletion
      } else {
        console.error("Failed to delete message");
      }
    } catch (error) {
      console.error(error);
    }
  
    setDeleteMessage(null); // Clear the deleteMessage state after deletion
  };
  
  return (
    <div>
      <h1>Hello World</h1>
      <div>
        <h3>Add New Message</h3>
        <form onSubmit={handleMessageSubmit}>
          <input
            type="text"
            value={newMessage}
            placeholder="Enter your message"
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button type="submit">Send</button>
        </form>
      </div>
      <div>
        <h3>Select Message</h3>
        <Dropdown>
          <DropdownTrigger>
            <Button variant="bordered">Select Message</Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions">
            {messages.map((msg) => (
              <DropdownItem
                key={msg.id}
                textValue={msg.message}
                onClick={() => setSelectedMessage(msg)}
              >
                {msg.message}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </div>
      {selectedMessage && (
        <div>
          <h3>Edit Message</h3>
          <form>
            <input
              type="text"
              value={editMessage}
              placeholder="Edit your message"
              onChange={(e) => setEditMessage(e.target.value)}
            />
            <button onClick={handleEditMessage}>Update</button>
          </form>
          <h3>Delete Message</h3>
          <button onClick={handleDeleteMessage}>Delete</button>
        </div>
      )}
    </div>
  );
}
