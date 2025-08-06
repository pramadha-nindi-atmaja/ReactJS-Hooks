import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Component2 from "./Component2.jsx";

const Component1 = ({ usr, theme = "light", onUserChange }) => {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setUser(usr);
    setLoading(false);
    
    // Notify parent component about the user change
    if (onUserChange) {
      onUserChange(usr);
    }
  }, [usr, onUserChange]);

  const handleUpdateUser = (newValue) => {
    setUser(newValue);
    if (onUserChange) {
      onUserChange(newValue);
    }
  };

  if (loading) {
    return <div>Loading user data...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className={`component-container ${theme}`}>
      <div className="component-header">Component1</div>
      <div className="user-info">
        <p>Current User: {user || "Guest"}</p>
        <input 
          type="text" 
          value={user || ""} 
          onChange={(e) => handleUpdateUser(e.target.value)}
          placeholder="Update username"
        />
      </div>
      <Component2 user={user} theme={theme} />
    </div>
  );
};

Component1.propTypes = {
  usr: PropTypes.string,
  theme: PropTypes.oneOf(["light", "dark", "system"]),
  onUserChange: PropTypes.func,
};

export default Component1;