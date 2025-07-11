import React, { useState } from 'react';

const App = () => {
  const [dark, setDark] = useState(false);

  return (
    <div style={{ height: '100vh', background: dark ? '#000' : '#fff' }}>
      <button onClick={() => setDark(!dark)}>Switch Theme</button>
    </div>
  );
};

export default App;
