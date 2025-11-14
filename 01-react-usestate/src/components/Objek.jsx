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
    setCar((prev) => ({
      ...prev,
      [property]: property === "year" || property === "mileage" 
        ? Number(value)
        : value,
    }));
  };

  const fields = [
    { key: "brand", type: "text", placeholder: "Brand" },
    { key: "model", type: "text", placeholder: "Model" },
    { key: "year", type: "number", placeholder: "Year" },
    { key: "color", type: "text", placeholder: "Color" },
    { key: "mileage", type: "number", placeholder: "Mileage" },
  ];

  return (
    <div style={styles.container}>
      <h1>My {car.brand}</h1>

      <div
        style={{
          ...styles.carPreview,
          backgroundColor: car.color,
        }}
        aria-label="car-color-preview"
      />

      <p style={styles.description}>
        It is a {car.color} {car.model} from {car.year} with {car.mileage} miles.
      </p>

      <div style={styles.form}>
        {fields.map((field) => (
          <input
            key={field.key}
            type={field.type}
            placeholder={field.placeholder}
            value={car[field.key]}
            onChange={(e) => updateCarProperty(field.key, e.target.value)}
            style={styles.input}
          />
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: 300,
    margin: "0 auto",
    padding: 20,
  },
  carPreview: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginBottom: 20,
    border: "1px solid #ccc",
  },
  description: {
    textAlign: "center",
    marginBottom: 20,
  },
  form: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  input: {
    padding: 10,
    fontSize: 16,
    marginBottom: 10,
    borderRadius: 6,
    border: "1px solid #bbb",
  },
};

export default Objek;
