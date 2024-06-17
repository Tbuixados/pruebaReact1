// eslint-disable-next-line react/prop-types
export const ProductCard = ({ name, description, price }) => {
  return (
    <div style={{ border: "2px solid black" }}>
      <h3>{name}</h3>
      <h4>{description}</h4>
      <h3>${price}</h3>
    </div>
  );
};
