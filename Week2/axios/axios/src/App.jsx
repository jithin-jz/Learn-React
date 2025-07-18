import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch data from API
    axios.get('http://localhost:3000/users')
      .then((response) => {
        setUsers(response.data); // Save to state
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  }, []);

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li> // show user name
        ))}
      </ul>
    </div>
  );
};

export default App;







