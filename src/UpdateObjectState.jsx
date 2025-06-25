
//How to update the state of an object


import { useState } from "react";

function MyComponent3() {
  const [car, setCar] = useState({ year: 2020, make: "McLaren", model: "P1" });

  function handleYear(e){setCar(c=>({...c,year:e.target.value}));}
  function handleMake(e){setCar(c=>({...c,make:e.target.value}))}
  function handleModel(e){setCar(c=>({...c,model:e.target.value}))}

  return (
    <div>
      <p>
        Your fav car is: {car.year}   &nbsp; 
        {car.make} &nbsp;
        {car.model}<br/><br/>

        <input type="Number" value={car.year} onChange={handleYear}></input><br/><br/>
        <input type="Text" value={car.make} onChange={handleMake}></input><br/><br/>
        <input type="Text" value={car.model} onChange={handleModel}></input><br/><br/>
      </p>
    </div>
  );
}
export default MyComponent3;
