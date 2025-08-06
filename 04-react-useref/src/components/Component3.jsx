import { useEffect, useRef, useState } from "react";

const Component3 = () => {
  const [inputValue, setInputValue] = useState("");
  const previousInputValue = useRef("");

  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);
  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h2>Currnet Value : {inputValue}</h2>
      <h2>Previous Value : {previousInputValue.current}</h2>
    </>
  );
};

export default Component3;
