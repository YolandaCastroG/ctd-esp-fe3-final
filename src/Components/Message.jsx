const Message = ({ user, reset }) => {
  return (
      <div className="text-center">
          <h4 style={{ color: "black", fontSize: "bold", marginBottom: "20px" }}>Gracias {user.name}, te contactaremos cuando antes vía mail: {user.email}</h4>
          <button onClick={reset} className="px-4 py-2 bg-neutral-400 text-white rounded-md shadow-sm hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50">Reset</button>
      </div>
  );
};

export default Message;