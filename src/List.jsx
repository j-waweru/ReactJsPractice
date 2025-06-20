function List(props) {
  const fruits = props.items;
  const cat = props.category;
  const LowCal = fruits.filter((fruit) => fruit.kcal < 1000);

  const listitems = LowCal.map((fruit) => (
    <li key={fruit.name}>
      {fruit.name} &nbsp;{fruit.kcal}
    </li>
  ));
  return (
    <ol>
      <>
        <h1>{cat}</h1> {listitems}{" "}
      </>
    </ol>
  );
}
export default List;
