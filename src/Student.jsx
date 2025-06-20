import "./index.css"
import PropTypes from 'prop-types'; // ES6

function Students(props) {
  return (
    <div className="student">
      <p>Name :{props.name}</p>      
      <p>Age :{props.age}</p>
      <p>isStudent :{props.isStudent ?"Yes":"No"}</p>
    </div>
  );
}
Students.propTypes={
  name: PropTypes.string,
  age: PropTypes.number,
}

export default Students;
