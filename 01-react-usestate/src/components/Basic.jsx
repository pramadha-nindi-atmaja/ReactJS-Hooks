import { useState } from "react";

const Basic = () => {
  const [color, setColor] = useState("red");
  return (
    <>
      <h1>Color: {color}</h1>
      <div
        style={{
          marginBottom: 20,
          width: 100,
          height: 100,
          backgroundColor: color,
        }}
      ></div>
      <button type="button" onClick={() => setColor("blue")}>
        Blue
      </button>
      <button type="button" onClick={() => setColor("red")}>
        Red
      </button>
    </>
  );
};

export default Basic;
