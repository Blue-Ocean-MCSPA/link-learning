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

