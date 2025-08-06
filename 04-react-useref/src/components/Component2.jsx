import { useRef } from "react";

const Component2 = () => {
  const inputElemnt = useRef();
  const focusInput = () => {
    inputElemnt.current.focus();
  };
  return (
    <>
      <input type="text" ref={inputElemnt} />
      <button onClick={focusInput}>Focus</button>
    </>
  );
};

export default Component2;
