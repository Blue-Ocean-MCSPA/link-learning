<<<<<<< HEAD
import { useState } from 'react';

const MessageThread = () => {
  // Initialize the messages state with the default messages
  const [messages, setMessages] = useState([
    {
      id: 1,
      user: "Humberto Palacios",
      avatar: "https://via.placeholder.com/50",
      timestamp: "10:00 AM",
      text: "What's up, bro? How is the project coming along?",
      edited: false,
      editedTimestamp: null
    },
    {
      id: 2,
      user: "Daniel Grady",
      avatar: "https://via.placeholder.com/50",
      timestamp: "10:02 AM",
      text: "Good, man. Just working on some new features.",
      edited: false,
      editedTimestamp: null
    },
  ]);

  const [newMessage, setNewMessage] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editMessageText, setEditMessageText] = useState('');
  const [hoveredMessageId, setHoveredMessageId] = useState(null); // New state for tracking hovered message
  const [showOptionsId, setShowOptionsId] = useState(null); // New state to track which message's options to show

  const handleMouseEnter = (id) => {
    setHoveredMessageId(id);
  };

  const handleMouseLeave = () => {
    setHoveredMessageId(null);
  };

  const handleIconClick = (id) => {
    setShowOptionsId(showOptionsId === id ? null : id); // Toggle options display for the clicked message
  };

  // Function to handle adding a new message
  const handleAddMessage = () => {
    const nextId = messages.length > 0 ? Math.max(...messages.map(m => m.id)) + 1 : 1;
    const newMessageObj = {
      id: nextId, // Generate a unique ID for the new message
      user: "Your Name", // Static user name for demonstration, can be dynamic
      avatar: "https://via.placeholder.com/50", // Static avatar for demonstration, can be dynamic
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), // Current time as timestamp
      text: newMessage // Message text from input
    };

    // Add the new message to the messages state
    setMessages([...messages, newMessageObj]);
    setNewMessage(''); // Reset the input field
  };

  const handleDeleteMessage = (id) => {
    setMessages(messages.filter(message => message.id !== id));
  };

  const handleEditStart = (id) => {
    const message = messages.find(message => message.id === id);
    setEditingId(id);
    setEditMessageText(message.text);
  };

  const handleEditSubmit = (id) => {
    const now = new Date();
    setMessages(messages.map(message => {
      if (message.id === id) {
        return { ...message, text: editMessageText, edited: true, editedTimestamp: now.toISOString() };
      }
      return message;
    }));
    setEditingId(null);
    setEditMessageText('');
  };

  // Function to handle input field changes
  const handleInputChange = (event) => {
    setNewMessage(event.target.value);
=======
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
      const jsonResponse = await response.json();
      const fetchedMessages = jsonResponse.data.rows; // Accessing the nested messages correctly
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

  const handleAddMessage = async () => {
    // Assuming the API generates a unique ID
    const messageToSend = {
      senderID: 1, // Static senderID for the example
      recipientID: 2, // Static recipientID for the example
      time_stamp: new Date().toISOString().split('T')[0], // Use ISO date format
      message: newMessage
    };
  
    try {
      const response = await fetch('/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(messageToSend),
      });
  
      if (!response.ok) throw new Error('Failed to send message');
  
      const addedMessage = await response.json();
      setMessages([...messages, addedMessage]); // Assuming the API returns the added message
      setNewMessage(''); // Reset the input field
    } catch (error) {
      console.error("Error adding message:", error);
    }
  };

  const handleDeleteMessage = async (id) => {
    try {
      const response = await fetch(`/api/messages/${id}`, {
        method: 'DELETE',
      });
  
      if (!response.ok) throw new Error('Failed to delete message');
  
      setMessages(messages.filter(message => message.id !== id));
    } catch (error) {
      console.error("Error deleting message:", error);
    }
  };

  // Event handler function that handles editing a message.
  const handleEditStart = (id) => {
    const message = messages.find(message => message.id === id); // Find a specific message with given ID and store it in a const.
    setEditingId(id); // Set the editing ID to the ID of the current message
    setEditMessageText(message.text); // Set the editMessageText the current text of the message
  };

  const handleEditSubmit = async (id) => {
    const messageToUpdate = {
      message: editMessageText, // New message content
    };
  
    try {
      const response = await fetch(`/api/messages/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(messageToUpdate),
      });
  
      if (!response.ok) throw new Error('Failed to update message');
  
      const updatedMessage = await response.json();
      setMessages(messages.map(message => message.id === id ? updatedMessage : message)); // Assuming the API returns the updated message
      setEditingId(null);
      setEditMessageText('');
    } catch (error) {
      console.error("Error updating message:", error);
    }
  };

  // Function to handle input field changes.
  const handleInputChange = (event) => {
    setNewMessage(event.target.value); // Set new message text to whatever the user is typing. 
>>>>>>> bd59320bf04a3a18ef16263a669395735f837ed7
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-col space-y-4 p-4 overflow-auto">
        {messages.map(message => (
          <div
            key={message.id}
            className="flex flex-col space-y-2 relative"
            onMouseEnter={() => handleMouseEnter(message.id)}
            onMouseLeave={handleMouseLeave}
          >
<<<<<<< HEAD
            <div className="flex space-x-3">
              <img src={message.avatar} alt={`${message.user}'s avatar`} className="w-10 h-10 rounded-full" />
              <div className="flex-1">
                <div className="text-sm text-gray-500">
                  {message.user} <span className="font-semibold">{message.timestamp}</span>
                  {message.edited && (
                    <span title={`Edited: ${new Date(message.editedTimestamp).toLocaleString()}`} className="text-xs text-gray-500">
                      (Edited)
                    </span>
                  )}
                </div>
                {editingId === message.id ? (
                  <input
                    type="text"
                    value={editMessageText}
                    onChange={(e) => setEditMessageText(e.target.value)}
                    className="border-2 border-gray-300 rounded p-2 w-1/2"
                  />
                ) : (
                  <div className="text-gray-800">{message.text}</div>
                )}
              </div>
            </div>
            {hoveredMessageId === message.id && (
              <div className="absolute top-0 right-0 p-2">
                <button
                  onClick={() => handleIconClick(message.id)}
                  className="text-gray-500 hover:text-black"
                >
                  &#x2630; {/* Hamburger icon */}
                </button>
              </div>
            )}
            {showOptionsId === message.id && (
              <div className="flex justify-end space-x-2">
                {editingId === message.id ? (
                  <>
                    <button onClick={() => handleEditSubmit(message.id)} className="text-green-500">
                      &#10003; {/* Check mark for submit */}
                    </button>
                    <button onClick={() => setEditingId(null)} className="text-red-500">
                      &#10005; {/* X-mark for cancel */}
                    </button>
                  </>
                ) : (
                  <>
                    <button onClick={() => handleEditStart(message.id)} className="text-blue-500">
                      &#x270E; {/* Pencil icon for edit */}
                    </button>
                    <button onClick={() => handleDeleteMessage(message.id)} className="text-red-500">
                      &#x1F5D1; {/* Trash icon for delete */}
                    </button>
=======
            <div className="text-sm text-gray-500">
              {`Message ID: ${message.id}`} <span className="font-semibold">{message.time_stamp}</span>
            </div>
            {editingId === message.id ? (
              <input
                type="text"
                value={editMessageText}
                onChange={(e) => setEditMessageText(e.target.value)}
                className="border-2 border-gray-300 rounded p-2 w-1/2"
              />
            ) : (
              <div className="text-gray-800">{message.message}</div>
            )}
            {hoveredMessageId === message.id && (
              <div className="absolute top-0 right-0 p-2 flex space-x-2">
                {editingId === message.id ? (
                  <>
                    <button onClick={() => handleEditSubmit(message.id)} className="text-green-500">&#10003;</button>
                    <button onClick={() => setEditingId(null)} className="text-red-500">&#10005;</button>
                  </>
                ) : (
                  <>
                    <button onClick={() => handleEditStart(message.id)} className="text-blue-500">&#x270E;</button>
                    <button onClick={() => handleDeleteMessage(message.id)} className="text-red-500">&#x1F5D1;</button>
>>>>>>> bd59320bf04a3a18ef16263a669395735f837ed7
                  </>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-auto">
        <input
<<<<<<< HEAD
          type="text"
          value={newMessage}
          onChange={handleInputChange}
          placeholder="Type your message here..."
          className="border-2 border-gray-300 rounded p-2 mr-2 w-full"
        />
        <button onClick={handleAddMessage} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded block w-full mt-2">
          Send
        </button>
      </div>
    </div>
  );
};

export default MessageThread;

=======
        type="text"
        value={newMessage}
        onChange={handleInputChange}
        placeholder="Type your message here..."
        className="border-2 border-gray-300 rounded p-2 mr-2 w-full"
      />
      <button onClick={handleAddMessage} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded block w-full mt-2">
        Send
      </button>
    </div>
  </div>
);
};

export default MessageThread;
>>>>>>> bd59320bf04a3a18ef16263a669395735f837ed7
