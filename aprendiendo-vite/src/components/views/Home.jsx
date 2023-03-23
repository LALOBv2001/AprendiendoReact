import React, { useState } from "react";
import Bienvenida from "../common/Bienvenida";
import AboutUs from "./AboutUs";

function Home() {
  const [valid, setvalid] = useState(false);
  const volverValido = () => {
    setvalid(true);
  };
  return (
    
    <div>
      <button onClick={volverValido}>Hazme valido</button>
      {valid ? <p>Hola</p> : <p>Adios</p>}
    </div>
  );
}

export default Home;
