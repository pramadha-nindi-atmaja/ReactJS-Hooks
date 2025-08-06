import { useContext } from "react";
import { UserContext } from "../contex/UserContex.js";

const Solusi4 = () => {
  const user = useContext(UserContext);
  return (
    <>
      <div>Solusi4</div>
      <h1>{`Hello ${user}`}</h1>
    </>
  );
};

export default Solusi4;
