import PropTypes from "prop-types";
const Component4 = ({ user }) => {
  return (
    <>
      <div>Component4</div>
      <h1>{`Hello ${user}`}</h1>
    </>
  );
};

Component4.propTypes = {
  user: PropTypes.string,
};

export default Component4;
