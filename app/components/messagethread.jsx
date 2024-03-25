import { useState } from 'react'; // Import useState hook 

// Message Thread component 
const MessageThread = () => {

  const [messages, setMessages] = useState([ // Create and initialize the state for messages. In this case, an array of two objects.
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

  const [newMessage, setNewMessage] = useState(''); // Create and initialize the state that that tracks new messages. 
  const [editingId, setEditingId] = useState(null); // Create and initialize the state that tracks the id of the message that's being edited.
  const [editMessageText, setEditMessageText] = useState(''); // Create and initialize the state that tracks the text of the edit message.
  const [hoveredMessageId, setHoveredMessageId] = useState(null); // Create and initialize the state that tracks the id of the message that the mouse is currently hovering over.
 
  // Event handler function that handles when the mouse hovers over a message.
  const handleMouseEnter = (id) => {
    setHoveredMessageId(id); // Set the state of hoveredMessageId to the id of the message 
  };

  // Event handler function that handles when the mouse leaves a message.
  const handleMouseLeave = () => {
    setHoveredMessageId(null); // Set the state of hoveredMessageId to null.
  };

  // Function to handle adding a new message
  const handleAddMessage = () => {
    const nextId = messages.length > 0 ? Math.max(...messages.map(m => m.id)) + 1 : 1; // Adds a new unique ID
    // New message object
    const newMessageObj = {
      id: nextId, // Generate a unique ID for the new message
      user: "Your Name", // Static user name for demonstration, can be dynamic
      avatar: "https://via.placeholder.com/50", // Static avatar for demonstration, can be dynamic
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), // Current time as timestamp
      text: newMessage // Message text from input
    };
    setMessages([...messages, newMessageObj]); // Add the new message to the messages state
    setNewMessage(''); // Reset the input field
  };

  // Event handler function that deletes a message. 
  const handleDeleteMessage = (id) => {
    setMessages(messages.filter(message => message.id !== id)); // Filter over messages and returns all the messages that don't have a given ID.
  };

  // Event handler function that handles editing a message.
  const handleEditStart = (id) => {
    const message = messages.find(message => message.id === id); // Find a specific message with given ID and store it in a const.
    setEditingId(id); // Set the editing ID to the ID of the current message
    setEditMessageText(message.text); // Set the editMessageText the current text of the message
  };

  // Event handler function that handles when a user submits an edited message. 
  const handleEditSubmit = (id) => {
    const now = new Date(); // Capture the exact time and store it in a const. 
    setMessages(messages.map(message => { // Map through messages 
      if (message.id === id) { // If the current message ID matches with the editedId
        return { ...message, text: editMessageText, edited: true, editedTimestamp: now.toISOString() }; // Return the message with updated values
      }
      return message; // Else, return message as if. 
    }));
    setEditingId(null); // Set the editing ID to null.
    setEditMessageText(''); // And the editing text to an empty string. 
  };

  // Function to handle input field changes.
  const handleInputChange = (event) => {
    setNewMessage(event.target.value); // Set new message text to whatever the user is typing. 
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-col space-y-4 p-4 overflow-auto">
        {/* Map through the messages array and display them. */}
        {messages.map(message => (
          <div
            key={message.id}
            className="flex flex-col space-y-2 relative"
            onMouseEnter={() => handleMouseEnter(message.id)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex space-x-3">
              {/* Display the image */}
              <img src={message.avatar} alt={`${message.user}'s avatar`} className="w-10 h-10 rounded-full" />
              <div className="flex-1">
                <div className="text-sm text-gray-500">
                  {/* Display the user name, timestamp */}
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
              <div className="absolute top-0 right-0 p-2 flex space-x-2">
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
        {/* Input text*/}
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

