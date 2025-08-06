import PropTypes from "prop-types";
import { useState, useCallback } from "react";
import Component3 from "./Component3.jsx";

const Component2 = ({ user, theme = "light" }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [userRole, setUserRole] = useState("viewer");
  
  const toggleDetails = useCallback(() => {
    setShowDetails(prev => !prev);
  }, []);
  
  const updateUserRole = useCallback((role) => {
    setUserRole(role);
  }, []);
  
  return (
    <div className={`component2-container ${theme}`}>
      <div className="component2-header">Component2</div>
      
      <div className="user-details">
        {user ? (
          <>
            <p>Handling user: <strong>{user}</strong></p>
            <p>Role: {userRole}</p>
            
            <div className="role-selector">
              <button 
                onClick={() => updateUserRole("viewer")}
                className={userRole === "viewer" ? "active" : ""}
              >
                Viewer
              </button>
              <button 
                onClick={() => updateUserRole("editor")}
                className={userRole === "editor" ? "active" : ""}
              >
                Editor
              </button>
              <button 
                onClick={() => updateUserRole("admin")}
                className={userRole === "admin" ? "active" : ""}
              >
                Admin
              </button>
            </div>
            
            <button onClick={toggleDetails}>
              {showDetails ? "Hide Details" : "Show Details"}
            </button>
            
            {showDetails && (
              <div className="expanded-details">
                <p>User since: {new Date().toLocaleDateString()}</p>
                <p>Last activity: {new Date().toLocaleTimeString()}</p>
              </div>
            )}
          </>
        ) : (
          <p>No user provided</p>
        )}
      </div>
      
      <Component3 user={user} role={userRole} theme={theme} />
    </div>
  );
};

Component2.propTypes = {
  user: PropTypes.string,
  theme: PropTypes.oneOf(["light", "dark", "system"]),
};

export default Component2;