import { Link } from "react-router-dom";
import { useDentistStates } from "../Context/Context";
import { images } from "../utils/images";

const Card = ({ dentist }) => {
  const { state, dispatch } = useDentistStates();
  const isFav = state.favs.find((fav) => fav.id == dentist.id);
  console.log(isFav);

  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
    dispatch({ type: isFav ? "REMOVE_FAV" : "ADD_FAV", payload: dentist });
    alert(isFav ? "Dentista eliminado de favoritos" : "Dentista agregado a favoritos");
  };

  const dentistImage = images.find((image) => image.id === dentist.id)?.img;

  return (
    <div className="card">
      {/* En cada card deberan mostrar en name - username y el id */}
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <img className="card-img" src={dentistImage} alt="Doctor" />
      <Link to={"/detail/" + dentist.id}>
        <h3>{dentist.name}</h3>
      </Link>
      <h3>{dentist.username}</h3>
      <button onClick={addFav} className="favButton m-10 p-10 rounded-md w-full">{isFav ? "🌟" : "⭐️"}</button>
    </div>
  );
};

export default Card;