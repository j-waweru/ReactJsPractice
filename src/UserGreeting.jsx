import PropTypes from "prop-types";

function UserGreeting(props) {
  if (props.isloggedin) {
    return <p>Logged in as {props.username}</p>;
  } else return <p>Please Login</p>;
}
UserGreeting.PropTypes = {
  isloggedin: PropTypes.bool,
  username: PropTypes.string,
};


export default UserGreeting;
