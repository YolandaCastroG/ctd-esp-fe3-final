import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Favs from "./Pages/Favs";
import Detail from "./Pages/Detail";
import Contact from "./Pages/Contact";
import Layout from "./Layouts/Layout";

function App() {

  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/favs" element={<Favs />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1>Error 404 - Page Not Found</h1>} />
        </Route>
      </Routes >
  );
}

export default App;