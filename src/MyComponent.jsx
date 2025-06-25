import { useState } from "react";

function MyComponent() {
    const [name, setName] = useState("Joe"); // Correct: use array destructuring
    const [age, setAge] = useState(0);

    const updateName = () => {
        setName(prevName => (prevName === "Joe" ? "Jane" : "Joe")); // Toggle
    };

    const incrementAge = () => {  setAge(age+1);

      
}
return (
    <div>
        <p>Name: {name}</p>
        <button onClick={updateName}>Set Name</button>

        <p>Name: {age}</p>
        <button onClick={incrementAge}>Increment Age</button>

    </div>
);
}

export default MyComponent;
