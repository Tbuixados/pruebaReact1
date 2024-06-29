import { useState, useEffect } from "react";
import { ItemList } from "./ItemList.jsx";

const ItemListContainer = () => {
  /* 
    - Peticion api
    - useState
    - fucniones
    - variables
    */

  const [items, setItems] = useState([]);

  const [nombre, setNombre] = useState("pepe");
  const [apellido, setApellido] = useState("perez");

  const saludar = () => {
    setNombre("juan");
  };
  const saludar2 = () => {
    setNombre("ernesto");
  };

  /*  useEffect(() => {
    console.log("Se hace la peticion - se ejecuta solo en el montaje");
  }, []); */
  useEffect(() => {
    console.log("Se hace la peticion - se ejecuta solo en el montaje");
  }, [apellido]);
  return (
    <>
      <ItemList nombre={nombre} saludar={saludar} saludar2={saludar2} />
      <h3>Apellido: {apellido}</h3>
      <button onClick={() => setApellido("lopez")}>Cambiar</button>
    </>
  );
};

export default ItemListContainer;
