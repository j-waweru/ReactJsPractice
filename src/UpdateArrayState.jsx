//How to update state of an array

import { useState } from "react";
function UpdateArrayState() {
  const [food, setFood] = useState(["Apple", "Oranges", "Banana"]);

  function addFood() {

    const newFood=document.getElementById("foodInput").value;
    document.getElementById("foodInput").value="";
    setFood(f=> [...f ,newFood]);
  }
  function deleteFood(index) {
    setFood(food.filter((_,i) => i !== index))
  }

  return (
    <div>
      <h2>List Of Food</h2>
      <ul>
        {food.map((eachFood, index) => (
          <li key={index} onClick={()=>deleteFood(index)}>{eachFood}</li>
        ))}
      </ul>
      <input type="text" id="foodInput" placeholder="Enter Food Here"></input>
      <button onClick={addFood}>Add Food</button>
    </div>
  );
}
export default UpdateArrayState;
