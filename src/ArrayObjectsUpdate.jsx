//How to update the state of an object

import { useState } from "react";

function ArrayObjectsUpdate() {
  const [cars, setCars] = useState([]);
  const [carYear, setYear] = useState(new Date().getFullYear());
  const [carMake, setMake] = useState([]);
  const [carModel, setModel] = useState([]);

  function handleAddCar() {
    const newcar = { year: carYear, make: carMake, model: carModel };

    setCars((c) => [...c, newcar]);
    setYear(new Date().getFullYear());
    setMake("");
    setModel("");
  }
  function handleRemoveCar(index) {

    setCars(c=>c.filter((_,i)=>i==index))
  }

  function handleYear(event) {
    setYear(event.target.value);
  }
  function handleMake(event) {
    setMake(event.target.value);
  }
  function handleModel(event) {
    setModel(event.target.value);
  }

  return (
    <div>
      <h2>List of Car Objects</h2>
      <ul >
        {cars.map((car, index) => (
          <li key={index} onClick={()=>handleRemoveCar(index)}>
            {" "}
            {car.year} {car.make} {car.model}
          </li>
        ))}
      </ul>
      <input
        type="number"
        value={carYear}
        onChange={handleYear}
        placeholder="Enter Car year"
      ></input>
      <br></br>
      <input
        type="text"
        value={carMake}
        onChange={handleMake}
        placeholder="Enter Make"
      ></input>
      <br></br>
      <input
        type="text"
        value={carModel}
        onChange={handleModel}
        placeholder="Enter Model"
      ></input>
      <br></br>
      <button onClick={handleAddCar}> Add Car</button>
    </div>
  );
}
export default ArrayObjectsUpdate;
