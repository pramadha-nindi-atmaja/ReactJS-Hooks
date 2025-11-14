import { useState } from "react";

const Typedata = () => {
  const [car, setCar] = useState({
    brand: "BMW",
    model: "X5",
    year: 2022,
    color: "red",
  });

  const presets = {
    Ford: {
      brand: "Ford",
      model: "Mustang",
      year: 2020,
      color: "blue",
    },
    BMW: {
      brand: "BMW",
      model: "X5",
      year: 2022,
      color: "red",
    },
  };

  const applyPreset = (name) => {
    setCar(presets[name]);
  };

  return (
    <>
      <h1>By {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}
      </p>

      {Object.keys(presets).map((key) => (
        <button
          key={key}
          type="button"
          onClick={() => applyPreset(key)}
          style={{ marginRight: 10 }}
        >
          Show {key}
        </button>
      ))}
    </>
  );
};

export default Typedata;
