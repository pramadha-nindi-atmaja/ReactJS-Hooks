import Component1 from "./components/Component1.jsx";
import Solusi1 from "./components/Solusi1.jsx";

function App() {
  const name = "Pojok Code";
  return (
    <>
      <Component1 usr={name} />
      <hr />
      <Solusi1 usr={name} />
    </>
  );
}

export default App;
