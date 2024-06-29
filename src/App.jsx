import { ItemCountContainer } from "./components/common/itemCount/ItemCountContainer";

function App() {
  return (
    <div>
      <ItemCountContainer stock={3} />
      <ItemCountContainer stock={5} />
      <ItemCountContainer stock={7} />
    </div>
  );
}

export default App;
