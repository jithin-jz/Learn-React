import React, { useState } from 'react';

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  function addTask() {
    if (task !== '') {
      setTasks([...tasks, task]);
      setTask('');
    }
  }

  function deleteTask(index) {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  }

  return (
    <div>
      <input value={task} onChange={e => setTask(e.target.value)} />
      <button onClick={addTask}>Add</button>

      {tasks.map((t, i) => (
        <div key={i}>
          {t} <button onClick={() => deleteTask(i)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default App;
