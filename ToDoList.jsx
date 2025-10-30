import { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState(["example text 1", "example text 2"]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const addNewTask = (e) => {
    e.preventDefault()
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  };
  const deleteTask = (index) => {
    setTimeout (() => {
      setTasks((t) => t.filter((_, i) => i !== index));
    }, 100)
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
      <form onSubmit={addNewTask}>
        <input
          value={newTask}
          type="text"
          placeholder="add new task"
          onChange={handleInputChange}
        />
        <button className="addBtn">
          Add
        </button>
        </form>
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
