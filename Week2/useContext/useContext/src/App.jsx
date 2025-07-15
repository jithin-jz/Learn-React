// App.jsx
import React from 'react';
import Dashboard from './components/Dashboard';
import { UserContext } from './context/UserContext';
const App = () => {
  const user = { name: 'Alex', age: 20 };

  return (
    <UserContext.Provider value={user}>
      <Dashboard />
    </UserContext.Provider>
  );
};

export default App;
