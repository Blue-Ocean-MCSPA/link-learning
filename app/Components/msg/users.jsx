// Add dark mode styles to each user item, for example `dark:bg-dark-foreground dark:text-dark-background`

const Users = () => {
  const users = ["Humberto", "Lance", "Matt", "Ruben", "Daniel", "Giselle", "Yerson", "Park", "Brandon"];

  return (
    <div className="p-4 bg-gray-100 dark:bg-dark-background min-h-full">
      {users.map((user, index) => (
        <div 
          key={index} 
          className="bg-blue-500 dark:bg-dark-foreground text-white dark:text-dark-background p-3 rounded shadow-md text-lg font-medium mb-2 hover:bg-blue-600 dark:hover:bg-dark-foreground transition-colors duration-300"
        >
          {user}
        </div>
      ))}
    </div>
  );
};

export default Users;