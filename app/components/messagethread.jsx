import { useState } from 'react';

const MessageThread = () => {
  // Initialize the messages state with the default messages
  const [messages, setMessages] = useState([
    {
      id: 1,
      user: "Humberto Palacios",
      avatar: "https://via.placeholder.com/50",
      timestamp: "10:00 AM",
      text: "What's up, bro? How is the project coming along?"
    },
    {
      id: 2,
      user: "Daniel Grady",
      avatar: "https://via.placeholder.com/50",
      timestamp: "10:02 AM",
      text: "Good, man. Just working on some new features."
    },
  ]);

  // State for the new message input
  const [newMessage, setNewMessage] = useState('');

  const [editingId, setEditingId] = useState(null);
  const [editMessageText, setEditMessageText] = useState('');

  // Function to handle adding a new message
  const handleAddMessage = () => {
    const nextId = messages.length > 0 ? Math.max(...messages.map(m => m.id)) + 1 : 1;
    const newMessageObj = {
      id: nextId, // Generate a unique ID for the new message
      user: "Your Name", // Static user name for demonstration, can be dynamic
      avatar: "https://via.placeholder.com/50", // Static avatar for demonstration, can be dynamic
      timestamp: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}), // Current time as timestamp
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
    setMessages(messages.map(message => {
      if (message.id === id) {
        return { ...message, text: editMessageText };
      }
      return message;
    }));
    setEditingId(null);
    setEditMessageText('');
  };

  // Function to handle input field changes
  const handleInputChange = (event) => {
    setNewMessage(event.target.value);
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-col space-y-4 p-4 overflow-auto">
        {messages.map(message => (
          <div key={message.id} className="flex space-x-3">
            <img src={message.avatar} alt={`${message.user}'s avatar`} className="w-10 h-10 rounded-full" />
            <div>
              <div className="text-sm text-gray-500">
                {message.user} <span className="font-semibold">{message.timestamp}</span>
              </div>
              {editingId === message.id ? (
                <input
                  type="text"
                  value={editMessageText}
                  onChange={(e) => setEditMessageText(e.target.value)}
                  className="border-2 border-gray-300 rounded p-2 mr-2 w-full text-black"
                />
              ) : (
                <div className="text-gray-800">{message.text}</div>
              )}
              {editingId === message.id ? (
                <button onClick={() => handleEditSubmit(message.id)} className="text-blue-500">Submit</button>
              ) : (
                <button onClick={() => handleEditStart(message.id)} className="text-blue-500">Edit</button>
              )}
              <button onClick={() => handleDeleteMessage(message.id)} className="text-red-500">Delete</button>
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