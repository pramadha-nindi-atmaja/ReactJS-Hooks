import { useState } from "react";

const Typedata = () => {
  const [brand, setBrand] = useState("BMW");
  const [model, setModel] = useState("X5");
  const [year, setYear] = useState(2022);
  const [color, setColor] = useState("red");

  const setFord = (e) => {
    e.preventDefault();
    setBrand("Ford");
    setModel("Mustang");
    setYear(2020);
    setColor("blue");
  };

  const setBMW = (e) => {
    e.preventDefault();
    setBrand("BMW");
    setModel("X5");
    setYear(2022);
    setColor("red");
  };
  return (
    <>
      <h1>By {brand}</h1>
      <p>
        It is a {color} {model} from {year}
      </p>
      <button type="button" onClick={setFord}>
        Sow Ford
      </button>
      <button type="button" onClick={setBMW}>
        Sow BMW
      </button>
    </>
  );
};

export default Typedata;
