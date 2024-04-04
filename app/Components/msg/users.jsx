// Users.jsx
const Users = () => {
  const users = ["Humberto", "Lance", "Matt", "Ruben", "Daniel", "Giselle", "Yerson", "Park", "Brandon"];

  return (
    <div className="p-4 bg-gray-100 min-h-full"> {/* Apply a background color and ensure full height */}
      {users.map((user, index) => (
        <div 
          key={index} 
          className="bg-blue-500 text-white p-3 rounded shadow-md text-lg font-medium mb-2 hover:bg-blue-600 transition-colors duration-300"
        >
          {user}
        </div>
      ))}
    </div>
  );
};

export default Users;