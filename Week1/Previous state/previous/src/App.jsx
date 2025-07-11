import React, { useState } from 'react';

const SimpleForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email) {
      setError("All fields are required");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Invalid email format");
      return;
    }

    setError('');
    alert(`Submitted\nName: ${name}\nEmail: ${email}`);
    setName('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '20px auto' }}>
      <h2>Simple Form</h2>

      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ display: 'block', marginBottom: '10px', padding: '8px', width: '100%' }}
      />

      <input
        type="text"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ display: 'block', marginBottom: '10px', padding: '8px', width: '100%' }}
      />

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <button type="submit" style={{ padding: '8px 16px' }}>Submit</button>
    </form>
  );
};

export default SimpleForm;
