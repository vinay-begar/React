import "./index.css"
import Vin from "./Vin";

//JSX -> JavaScript + XML
const App = () => {
    let a = "Vinay Begar";
  return (
    <>
      <Vin />
      <h1 className="app">{a}</h1>

      <p>This is a paragraph.</p>
    </>
  );
}

export default App