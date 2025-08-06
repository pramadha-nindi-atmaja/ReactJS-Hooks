import WithMemo from "./components/WithMemo.jsx";
import WithoutMemo from "./components/WithoutMemo.jsx";

function App() {
  return (
    <>
      <WithoutMemo />
      <hr />
      <WithMemo />
    </>
  );
}

export default App;
