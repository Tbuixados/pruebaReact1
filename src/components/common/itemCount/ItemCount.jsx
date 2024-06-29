export function ItemCount({ counter, add, subtract }) {
  return (
    <>
      <button style={{ marginRight: "20px" }} onClick={add}>
        Add
      </button>
      <button onClick={subtract} disabled={counter === 1 ? true : false}>
        Subtract
      </button>
      <h2>Quantity: {counter}</h2>
    </>
  );
}
