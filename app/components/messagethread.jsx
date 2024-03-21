

const MessageThread = () => {
    const messages = [
        {
          id: 1,
          user: "Humberto Palacios",
          avatar: "https://via.placeholder.com/50",
          timestamp: "10:00 AM",
          text: "What's up, bro? How is the project coming along"
        },
        {
          id: 2,
          user: "Ruben Flores",
          avatar: "https://via.placeholder.com/50",
          timestamp: "10:02 AM",
          text: "Good, man. Just working on some new features."
        },
      ];
  return (
    <div className="flex flex-col space-y-4 p-4">
      {messages.map(message => (
        <div key={message.id} className="flex space-x-3">
          <img src={message.avatar} alt={`${message.user}'s avatar`} className="w-10 h-10 rounded-full" />
          <div>
            <div className="text-sm text-gray-500">
              {message.user} <span className="font-semibold">{message.timestamp}</span>
            </div>
            <div className="text-gray-800">{message.text}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MessageThread;