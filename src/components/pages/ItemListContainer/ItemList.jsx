export const ItemList = ({ nombre, saludar }) => {
  return (
    <div>
      <h2>Hola {nombre}</h2>
      <button onClick={saludar}>Saludar</button>
    </div>
  );
};
