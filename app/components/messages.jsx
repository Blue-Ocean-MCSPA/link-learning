import React from 'react';

const Messages = () => {
  const users = ["Humberto", "Lance", "Matt", "Ruben", "Daniel", "Giselle", "Yerson", "Park", "Brandon"];

  return (
    <div className="flex flex-col space-y-2 p-4">
      {users.map((user, index) => (
        <div key={index} className="bg-blue-500 text-white p-2 rounded shadow w-1/6 min-w-max"> {user} </div>
      ))}
    </div>
  );
};

export default Messages;