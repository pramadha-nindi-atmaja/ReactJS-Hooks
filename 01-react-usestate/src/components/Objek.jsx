import { useState } from "react";

const Objek = () => {
  const [car, setCar] = useState({
    brand: "BMW",
    model: "X5",
    year: 2022,
    color: "red",
    mileage: 15000,
  });

  const updateCarProperty = (property, value) => {
    setCar((prevState) => ({
      ...prevState,
      [property]: value,
    }));
  };

  return (
    <div style={styles.carContainer}>
      <h1>My {car.brand}</h1>
      <div
        style={{
          ...styles.carDisplay,
          backgroundColor: car.color,
        }}
      ></div>
      <p>
        It is a {car.color} {car.model} from {car.year} with {car.mileage} miles.
      </p>
      <div style={styles.inputs}>
        <input
          type="text"
          placeholder="Brand"
          value={car.brand}
          onChange={(e) => updateCarProperty('brand', e.target.value)}
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Model"
          value={car.model}
          onChange={(e) => updateCarProperty('model', e.target.value)}
          style={styles.input}
        />
        <input
          type="number"
          placeholder="Year"
          value={car.year}
          onChange={(e) => updateCarProperty('year', e.target.value)}
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Color"
          value={car.color}
          onChange={(e) => updateCarProperty('color', e.target.value)}
          style={styles.input}
        />
        <input
          type="number"
          placeholder="Mileage"
          value={car.mileage}
          onChange={(e) => updateCarProperty('mileage', e.target.value)}
          style={styles.input}
        />
      </div>
    </div>
  );
};

const styles = {
  carContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  carDisplay: {
    marginBottom: 20,
    width: 100,
    height: 100,
  },
  inputs: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    margin: '5px 0',
    padding: '10px',
    fontSize: '16px',
  },
};

export default Objek;
