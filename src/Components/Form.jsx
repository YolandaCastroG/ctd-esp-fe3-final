import { useState } from "react";
import Message from "./Message";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const [user, setUser] = useState({
    name: "",
    email: "",
  });
  console.log(user);

  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  const handleChangeName = (e) => {
    setUser({ ...user, name: e.target.value });
  };

  const handleChangeEmail = (e) => {
    setUser({ ...user, email: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      user.name.trim().length >= 5 &&
      emailRegex.test(user.email)
    ) {
      setShow(true);
      setError(false);
    } else {
      setShow(false);
      setError(true);
    }
  };

  const reset = () => {
    setUser({
      name: "",
      email: "",
    });
    setShow(false);
    setError(false);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-zinc-200 rounded-lg shadow-md mb-10">
      {show ? (
        <Message user={user} reset={reset} />
      ) : (
        <>
          <form onSubmit={handleSubmit} className="space-y-4 ">
            <label className="block text-sm font-medium text-gray-700">Nombre: </label>
            <input type="text" value={user.name} onChange={handleChangeName} placeholder="Ingrese su nombre" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-red-500 dark:input-text-black"/>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email: </label>
            <input type="email" value={user.email} onChange={handleChangeEmail} placeholder="Ingrese su email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-red-500 input-text-black"/>
            <button type="submit" className="px-4 py-2 bg-neutral-400 text-white rounded-md shadow-sm hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50">Enviar</button>
          </form>
        </>
      )}
      {error ? (<h4 style={{ color: "black", fontSize: "bold" }}>Por favor verifique su información nuevamente </h4>
      ) : null}
    </div>
  );
};

export default Form;