import { ItemCount } from "./ItemCount";
import { useState } from "react";

export function ItemCountContainer({ stock }) {
  const [counter, setCounter] = useState(1);

  const addOne = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    } else {
      alert("No more stock");
    }
  };
  const subtractOne = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    } else {
      alert("Yoy can't buy less than 1 product");
    }
  };
  return <ItemCount counter={counter} add={addOne} subtract={subtractOne} />;
}
