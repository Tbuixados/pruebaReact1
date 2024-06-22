import { ItemList } from "./ItemList.jsx";

const ItemListContainer = () => {
  /* 
    - Peticion api
    - useState
    - fucniones
    - variables
    */

  let nombre = "pepe";

  const saludar = () => {
    alert("Hola pepe");
  };

  return <ItemList nombre={nombre} saludar={saludar} />;
};

export default ItemListContainer;
