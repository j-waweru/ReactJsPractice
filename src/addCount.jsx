import { useState, useEffect } from "react";
function MyComponent() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('green');

  useEffect(() => {
    document.title = `Count: ${count} ${color}`;
  }, [count]);



  function addcount() {
    setCount((c) => c + 1);
  }



  function subcount() {
    setCount((c) => c - 1);
  }




  function changeColor(){
    setColor(c=>c==='green' ?'red':"green")

  }
  return (
    <div>
      <p style={{color:color}}>Count: {count}</p>
      <button onClick={addcount}>Add</button>
      <button onClick={subcount}>Subtract</button><br/>
      <button onClick={changeColor}>Change Color</button>


    </div>
  );
}

export default MyComponent;
