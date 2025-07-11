import React from 'react'

const student = [
  { id: 1, name: "Alex" },
  { id: 2, name: "Bella" },
  { id: 3, name: "Chris" }
]

const App = () => {
  return (
    <div>
        <ul>
        {/* {student.map(name => <li key={name}>{name}</li>)}  */}
        {student.map(s=>(<li key={s.id}>{s.name}</li>))} 
        </ul>      
    </div>
  )
}

export default App


// import React, { useState } from 'react';

// const Classroom = () => {
//   // Start with 3 students
//   const [students, setStudents] = useState([
//     { id: 1, name: "Alex" },
//     { id: 2, name: "Bella" },
//     { id: 3, name: "Chris" }
//   ]);

//   const [newName, setNewName] = useState("");

//   // Function to add a new student
//   const addStudent = () => {
//     if (newName.trim() === "") return;

//     const newStudent = {
//       id: Date.now(), // Unique ID based on current time
//       name: newName
//     };

//     setStudents([...students, newStudent]);
//     setNewName(""); // Clear input after adding
//   };

//   // Function to remove a student by ID
//   const removeStudent = (id) => {
//     setStudents(students.filter(student => student.id !== id));
//   };

//   return (
//     <div>
//       <h2>📋 Classroom Roster</h2>

//       <input 
//         type="text"
//         placeholder="Enter name"
//         value={newName}
//         onChange={(e) => setNewName(e.target.value)}
//       />
//       <button onClick={addStudent}>➕ Add Student</button>

//       <ul>
//         {students.map(student => (
//           <li key={student.id}>
//             {student.name} 
//             <button onClick={() => removeStudent(student.id)}>🗑 Remove</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Classroom;
