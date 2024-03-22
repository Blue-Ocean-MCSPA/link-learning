import React from 'react';
import Users from './Users'; // Adjust the import path as necessary
import MessageThread from './MessageThread'; // Adjust the import path as necessary

const Messages = () => {
  return (
    <div className="flex h-screen">
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