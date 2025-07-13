import React, { useEffect, useState } from "react";

const App = () => {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ name: "", email: "" });

  const baseUrl = "http://localhost:3000/users";

  // GET - Fetch all users
  const fetchUsers = async () => {
    const res = await fetch(baseUrl);
    const data = await res.json();
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // POST - Add a new user
  const addUser = async () => {
    await fetch(baseUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    fetchUsers();
  };

  // PUT - Full update
  const updateUser = async (id) => {
    await fetch(`${baseUrl}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "Updated Name", email: "new@example.com" }),
    });
    fetchUsers();
  };

  // PATCH - Partial update
  const patchUser = async (id) => {
    await fetch(`${baseUrl}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "Patched Name" }),
    });
    fetchUsers();
  };

  // DELETE - Remove user
  const deleteUser = async (id) => {
    await fetch(`${baseUrl}/${id}`, {
      method: "DELETE",
    });
    fetchUsers();
  };

  return (
    <div>
      <h2>Users</h2>
      <input
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <button onClick={addUser}>Add User</button>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
            <button onClick={() => updateUser(user.id)}>PUT</button>
            <button onClick={() => patchUser(user.id)}>PATCH</button>
            <button onClick={() => deleteUser(user.id)}>DELETE</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
