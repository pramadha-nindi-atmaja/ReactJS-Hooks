import { useState } from "react";

const Basic = () => {
  const [color, setColor] = useState("red");

  const colors = ["blue", "red"];

  return (
    <>
      <h1>Color: {color}</h1>

      <div
        aria-label="color-preview"
        style={{
          marginBottom: 20,
          width: 100,
          height: 100,
          backgroundColor: color,
          borderRadius: 8,
          border: "1px solid #ccc",
        }}
      ></div>

      {colors.map((c) => (
        <button
          key={c}
          type="button"
          onClick={() => setColor(c)}
          style={{ marginRight: 10 }}
        >
          {c.charAt(0).toUpperCase() + c.slice(1)}
        </button>
      ))}
    </>
  );
};

export default Basic;
