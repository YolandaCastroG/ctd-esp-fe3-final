import Card from "../Components/Card";
import { useDentistStates } from "../Context/Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const { state } = useDentistStates();

  return (
    <main className="home">
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {state.dentists.map((dentist) => ( 
          <Card key={dentist.id} dentist={dentist}/> 
        ))}
      </div>
    </main>
  );
};

export default Home;