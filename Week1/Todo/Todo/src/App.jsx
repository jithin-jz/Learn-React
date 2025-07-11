// import React, { useState } from 'react';

// function App() {
//   const [task, setTask] = useState('');
//   const [tasks, setTasks] = useState([]);

//   function addTask() {
//     if (task !== '') {
//       setTasks([...tasks, task]);
//       setTask('');
//     }
//   }

//   function deleteTask(index) {
//     const newTasks = tasks.filter((_, i) => i !== index);
//     setTasks(newTasks);
//   }

//   return (
//     <div>
//       <input value={task} onChange={e => setTask(e.target.value)} />
//       <button onClick={addTask}>Add</button>

//       {tasks.map((t, i) => (
//         <div key={i}>
//           {t} <button onClick={() => deleteTask(i)}>Delete</button>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;
import React, { useState } from 'react';

const App = () => {
  const [task, setTask] = useState('');
  const [list, setList] = useState([]);

  const addTask = () => {
    if (task.trim()) {
      setList([...list, task]);
      setTask('');
    }
  };

  return (
    <div>
      <input 
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTask}>ADD</button>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;