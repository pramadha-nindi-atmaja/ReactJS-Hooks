import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { UserContext } from "../contex/UserContex.js";
import Solusi2 from "./Solusi2.jsx";
const Solusi1 = ({ usr }) => {
  const [user, setUser] = useState("");

  useEffect(() => {
    setUser(usr);
  }, [usr]);
  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}`}</h1>
      <Solusi2 />
    </UserContext.Provider>
  );
};

Solusi1.propTypes = {
  usr: PropTypes.string,
};

export default Solusi1;
