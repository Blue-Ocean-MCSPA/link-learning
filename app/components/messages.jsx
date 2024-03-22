import React from 'react';
import Users from './Users'; // Adjust the import path as necessary
import MessageThread from './MessageThread'; // Adjust the import path as necessary

const Messages = ({ className }) => { // Accept className as a prop
  // Use template literals to combine provided className with default class names
  const containerClass = `flex h-screen ${className}`; 

  return (
    <div className={containerClass}> {/* Use the computed class name */}
      <div className="w-1/3 border-r border-gray-200 overflow-auto">
        <Users />
      </div>
      <div className="w-2/3 overflow-auto">
        <MessageThread />
      </div>
    </div>
  );
};

export default Messages;