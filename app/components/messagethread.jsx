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

  const handleAddMessage = async () => {
    // Assuming the API generates a unique ID
    
    const senderid= 1 // Static senderID for the example
    const recipientid= 2 // Static recipientID for the example
    const time_stamp= new Date().toISOString().split('T')[0] // Use ISO date format
    setMessages(newMessage)
      
    try {
      const response = await fetch('/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ senderid, recipientid, time_stamp, message: newMessage}),
      });
      console.log(response)
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

  const handleEditStart = (id) => {
    const message = messages.find(message => message.id === id);
    setEditingId(id);
    setEditMessageText(message.message); // Here, ensure you're using the correct property name
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
  };

  const formatDate = (isoDateString) => {
    const date = new Date(isoDateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
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
            <div className="text-sm text-gray-500">
              {`Message ID: ${message.id}`} <span className="font-semibold">{formatDate(message.time_stamp)}</span>
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
                  </>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-auto">
        <input
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
