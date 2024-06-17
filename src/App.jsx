import { useState } from "react";
import { Counter } from "./components/common/Counter";
import { Navbar } from "./components/layout/Navbar";
import ItemListContainer from "./components/pages/ItemListContainer";

function App() {
  const[mode, setMode] = useState(false)

  const cambiarModo = () =>{
    setMode(!mode)
  } 
  return (
    <div>
      <button onClick={cambiarModo}>DE modo claro a modo oscuro</button>
     {/*  <Navbar />
      <ItemListContainer /> */}
      <Counter />
    </div>
  );
}

export default App;
