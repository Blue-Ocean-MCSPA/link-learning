"use client"

import { useState, useEffect } from 'react'; // Import useState hook 

// Message Thread component 
const MessageThread = () => {
  const [messages, setMessages] = useState([]); // Create and initialize the state for messages. 
  const [newMessage, setNewMessage] = useState(''); // Create and initialize the state that that tracks new messages. 
  const [editingId, setEditingId] = useState(null); // Create and initialize the state that tracks the id of the message that's being edited.
  const [editMessageText, setEditMessageText] = useState(''); // Create and initialize the state that tracks the text of the edit message.
  const [hoveredMessageId, setHoveredMessageId] = useState(null); // Create and initialize the state that tracks the id of the message that the mouse is currently hovering over.

  useEffect(() => {
    // Function to fetch messages from your API
    const fetchMessages = async () => {
      const response = await fetch('/api/messages'); // Adjust this URL based on your actual API endpoint
      const fetchedMessages = await response.json(); // Directly accessing the array of messages
      setMessages(fetchedMessages);
    };

    fetchMessages();
  }, []); // Empty dependency array means this effect runs once on mount

  // Event handler function that handles when the mouse hovers over a message.
  const handleMouseEnter = (id) => {
    setHoveredMessageId(id); // Set the state of hoveredMessageId to the id of the message 
  };

  // Event handler function that handles when the mouse leaves a message.
  const handleMouseLeave = () => {
    setHoveredMessageId(null); // Set the state of hoveredMessageId to null.
  };

  // Event handling function that handles adding a message. 
  const handleAddMessage = async () => {
    // Assuming the API generates a unique ID
    const messageToSend = {
      senderid: 1, // Static senderID for the example.
      recipientid: 2, // Static recipientID for the example.
      time_stamp: new Date().toISOString().split('T')[0], // Use ISO date format.
      message: newMessage // Assign whatever the user typed to be the value of the message property.
    };

    try { // Try requesting information to the server
      const response = await fetch('/api/messages', { // Target specific endpoint
        method: 'POST', // With POST method to create data 
        headers: {
          'Content-Type': 'application/json', // Content type will be json formatted data
        },
        body: JSON.stringify(messageToSend), // Converts data from a JavaScript object to a JSON string in order to be sent to a server.
      });

      if (!response.ok) throw new Error('Failed to send message'); // If the post was unsuccessful then throw an error. 

      const addedMessage = await response.json(); // Convert data from JSON string to JavaScript object and store it in addedMessage const.
      setMessages([...messages, addedMessage]); // Assuming the API returns the added message
      setNewMessage(''); // Reset the input field

    } catch (error) {  // If request was unsuccessful
      console.error("Error adding message:", error); // Log out error.
    }
  };


  // Event handling function that deletes message
  const handleDeleteMessage = async (id) => {

    try { // Try requesting information to the server
      const response = await fetch(`/api/messages/${id}`, { // Target specific endpoint
        method: 'DELETE', // With DELETE method to delete data from database
      });

      if (!response.ok) throw new Error('Failed to delete message'); // If the delete was unsuccessful then throw an error.

      setMessages(messages.filter(message => message.id !== id)); // Filter messages by returning all messages that don't have a given ID. 

    } catch (error) { // If try request was unsuccessful
      console.error("Error deleting message:", error); // Log out error
    }
  };

  // Event handler function that handles edits 
  const handleEditStart = (id) => {
    const message = messages.find(message => message.id === id); // Find message with a given ID
    setEditingId(id); // Set the editing ID to be that specific ID.
    setEditMessageText(message.message); // Set the message text to be that of that specific message
  };

  // Event handler function that handles edit submits 
  const handleEditSubmit = async (id) => {
    const messageToUpdate = { // Object that will store the updated message 
      message: editMessageText, // New message content
    };

    try { // // Try requesting information to the server
      const response = await fetch(`/api/messages/${id}`, { // Target specific endpoint
        method: 'PATCH', // With PATCH method to update data
        headers: {
          'Content-Type': 'application/json', // Content type will be json formatted data
        },
        body: JSON.stringify(messageToUpdate), // Covert JavaScript object data to JSON string data
      });

      if (!response.ok) throw new Error('Failed to update message'); // If the update was unsuccessful then throw an error

      const updatedMessage = await response.json(); // Respond by converting JSON string data to JavaScript object data and store it in const.

      setMessages(messages.map(message => message.id === id ? updatedMessage : message)); // Map through the messages, if the ID matches ID then update it. If not, leave message as is. 
      setEditingId(null); // Set the editing ID to null. 
      setEditMessageText(''); // Set/clear the edit message text. 

    } catch (error) { // If request was unsuccessful
      console.error("Error updating message:", error); // Log out error. 
    }
  };

  // Function to handle input field changes.
  const handleInputChange = (event) => {
    setNewMessage(event.target.value); // Set new message text to whatever the user is typing. 
  };

  // Function to format date without time
  const formatDate = (isoDateString) => {
    const date = new Date(isoDateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100 p-4">
      <div className="flex-1 overflow-auto">
        {messages.map((message, index) => (
          <div
            key={message.id}
            className={`flex mb-4 ${index % 2 === 0 ? 'flex-col items-start' : 'flex-col items-end'}`}
            onMouseEnter={() => setHoveredMessageId(message.id)}
            onMouseLeave={() => setHoveredMessageId(null)}
          >
            <div className={`flex ${index % 2 === 0 ? '' : 'flex-row-reverse'} space-x-3 space-x-reverse items-end`}>
              <img src="https://via.placeholder.com/50" alt="Avatar" className="w-10 h-10 rounded-full" />
              <div
                className="flex flex-col relative max-w-xs md:max-w-md lg:max-w-lg px-4 py-2 rounded-lg shadow"
                style={{
                  backgroundColor: index % 2 === 0 ? '#f0f0f0' : '#0084ff',
                  color: index % 2 === 0 ? '#000' : '#fff',
                  minHeight: '100px', // Setting a minimum height for the message bubble
                }}
              >
                <div className="flex-1">
                  <div className="font-semibold">{message.senderName || "User"} <span className="font-normal">{formatDate(message.time_stamp)}</span></div>
                  {editingId === message.id ? (
                    <input
                      type="text"
                      value={editMessageText}
                      onChange={(e) => setEditMessageText(e.target.value)}
                      className="mt-2 p-2 w-full rounded border-2 border-gray-300"
                      style={{ color: '#000', backgroundColor: '#fff' }}
                    />
                  ) : (
                    <p className="mt-2">{message.message}</p>
                  )}
                  {message.edited && (
                    <span className="text-xs" style={{ color: index % 2 === 0 ? '#555' : '#ccc' }}>
                      (Edited)
                    </span>
                  )}
                </div>
                
                {hoveredMessageId === message.id && (
                  <div className="mt-2 flex space-x-2">
                    {editingId === message.id ? (
                      <>
                        <button onClick={() => handleEditSubmit(message.id)} className="text-green-500">&#10003;</button>
                        <button onClick={() => setEditingId(null)} className="text-red-500">&#10005;</button>
                      </>
                    ) : (
                      <>
                        <button onClick={() => handleEditStart(message.id)} className={`text-blue-500 ${index % 2 !== 0 && 'text-white'}`}>&#x270E;</button>
                        <button onClick={() => handleDeleteMessage(message.id)} className="text-red-500">&#x1F5D1;</button>
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-auto">
        <input
          type="text"
          value={newMessage}
          onChange={handleInputChange}
          placeholder="Type your message here..."
          className="border rounded w-full px-4 py-2"
        />
        <button onClick={handleAddMessage} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded block w-full mt-2">
          Send
        </button>
      </div>
    </div>
  );
};

export default MessageThread;