import { Link } from "react-router-dom";
import { useDentistStates } from "../Context/Context";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const { state, dispatch } = useDentistStates();

  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  return (
    <nav>
      <ul className="flex items-center gap-3">
        <Link to="/" className="navbarBrand font-semibold"><h4>DH Odonto</h4></Link>
      </ul>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <ul className="flex items-center gap-3">
        <Link to="/"><h4>Home</h4></Link>
        <Link to="/favs"><h4>Destacados</h4></Link>
        <Link to="/contact"><h4>Contacto</h4></Link>
        {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
        <button onClick={toggleTheme}>{state.theme ? "🌜" : "🌞"}</button>
      </ul>
    </nav>
  );
};

export default Navbar;