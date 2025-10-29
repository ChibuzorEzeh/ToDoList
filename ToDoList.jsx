import { useState } from "react";

function ToDoList() {

  const [tasks, setTasks] = useState(["walk the dog", "clear the grass"]);

  const [newTask, setNewTask] = useState("");

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const addNewTask = () => {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  };
  const deleteTask = (index) => {
    setTasks((t) => t.filter((_, i) => i !== index));
  };
  const moveTaskUp = (index) => {
    if (index > 0) {
      const updatedTask = [...tasks];
      [updatedTask[index], updatedTask[index - 1]] = [
        updatedTask[index - 1],
        updatedTask[index],
      ];
      setTasks(updatedTask);
    }
  };
  

  const moveTaskDown = (index) =>  {
    if (index < tasks.length - 1){
         const updatedTask = [...tasks];
      [updatedTask[index], updatedTask[index + 1]] = [
        updatedTask[index + 1],
        updatedTask[index],
      ];
      setTasks(updatedTask);
    }
  }

  return (
    <>
      <div className="inputArea">
        <input
          value={newTask}
          type="text"
          placeholder="add new task"
          onChange={handleInputChange}
        />
        <button className="addBtn" onClick={addNewTask}>
          Add
        </button>
      </div>
      <ol>
        {tasks.map((elem, index) => (
          <li className="lists" key={index}>
            <span className="text">{elem}</span>
            <button className="deleteBtn" onClick={() => deleteTask(index)}>Delete</button>
            <button className="moveBtn" onClick={() => moveTaskUp(index)}>Up</button>
            <button onClick={ () => moveTaskDown (index)} className="moveBtn">Down</button>
          </li>
        ))}
      </ol>
    </>
  );
}
export default ToDoList;
