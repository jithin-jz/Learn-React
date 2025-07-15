// Dashboard.jsx
import React, { useContext } from 'react';
import { UserContext } from './context/UserContext';

const Dashboard = () => {
  const user = useContext(UserContext);

  return (
    <div>
      <h2>Welcome, {user.name}!</h2>
      <p>Age: {user.age}</p>
    </div>
  );
};

export default Dashboard;
