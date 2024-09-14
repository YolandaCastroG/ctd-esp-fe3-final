import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const [detail, setDetail] = useState({});
  const { id } = useParams();
  console.log(id);
  const url = "https://jsonplaceholder.typicode.com/users/" + id;

  useEffect(() => {
    axios(url).then((res) => {
      console.log(res.data);
      setDetail(res.data);
    })
    .catch((err) => console.log(err));
  }, []);

  return (
    <div className="tableContainer">
      <h1>Detail Dentist: {detail.id}</h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <table> 
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Email</th>
            <th scope="col">Telefóno</th>
            <th scope="col">Sitio Web</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{detail.name}</td>
            <td>{detail.email}</td>
            <td>{detail.phone}</td>
            <td>{detail.website}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Detail;