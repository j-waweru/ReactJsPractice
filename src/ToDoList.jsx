import { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([
    "Eat Breakfast",
    "Take a walk",
    "Shower",
  ]);
  const [newtask, setNewTask] = useState("");

  function handleInputChange(e) {
    setNewTask(e.target.value);
  }
  function addTask() {
    if (newtask.trim() !== "") {
      setTasks((t) => [...t, newtask]);
      setNewTask("");
    }
  }
  function deleteTask(index) {
    const updatedTasks =tasks.filter((_,i)=> i!==index);
    setTasks(updatedTasks)

    

  }
  function movetaskup(index) {
    if(index>0){
      const updatedTasks = [...tasks];
      [updatedTasks[index],updatedTasks[index-1]]=[updatedTasks[index-1],updatedTasks[index]]
      setTasks(updatedTasks)

    }


  }
  function movetaskdown(index) {

    if(index<tasks.length-1){
      const updatedTasks = [...tasks];
      [updatedTasks[index],updatedTasks[index+1]]=[updatedTasks[index+1],updatedTasks[index]]
      setTasks(updatedTasks)
  }}

  return (
    <div className="to-do-list">
      <h1>To-Do-List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter task"
          value={newtask}
          onChange={handleInputChange}
        ></input>
        <button className="add-button" onClick={addTask}>
          Add Task
        </button>
      </div>
      <ol>
        {" "}
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="delete-button" onClick={() => deleteTask(index)}>
              Delete
            </button>
            <button className="move-button" onClick={() => movetaskup(index)}>
              👆
            </button>
            <button className="move-button" onClick={() => movetaskdown(index)}>
              👇
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
export default ToDoList;
