import List from "./List"
import "./index.css"


function App() {
  const fruits =[{name:"banana" , kcal:95},
    {name:"Orange" , kcal:45},
    {name:"banana" , kcal:105},
    {name:"Pineapple" , kcal:37},{name:"coconut" , kcal:155},]


  return (
    <>
    <List items={fruits} category="fruits"/>
    </>

  );
}

export default App;
