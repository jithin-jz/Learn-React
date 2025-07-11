import React, { useEffect, useState } from 'react';

const App = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const response = await fetch('http://localhost:3000/users');
    const data = await response.json();
    setUsers(data);
  };

  const addUser = async () => {
    await fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: 'Nithin', email: 'nithin@gmail.com' }),
    });

    // Refresh user list after adding
    fetchUsers();
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>User List</h1>

      <button onClick={addUser}>Add New User</button>

      <ul>
        {users.map((u) => (
          <li key={u.id}>
            {u.id}: {u.name} - {u.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
