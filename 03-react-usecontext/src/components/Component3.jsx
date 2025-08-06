import PropTypes from "prop-types";
import Component4 from "./Component4.jsx";
const Component3 = ({ user }) => {
  return (
    <>
      <div>Component3</div>
      <Component4 user={user} />
    </>
  );
};

Component3.propTypes = {
  user: PropTypes.string,
};

export default Component3;
