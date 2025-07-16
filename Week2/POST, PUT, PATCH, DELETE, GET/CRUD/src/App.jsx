import React, { useEffect, useState } from "react";

const App = () => {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ name: "", email: "" });
  const baseUrl = "http://localhost:3000/users";

  // GET - Fetch all users
  const fetchUsers = async () => {
    try {
      const res = await fetch(baseUrl);
      const data = await res.json();
      setUsers(data);
    } catch (error) {
      console.error("Failed to fetch users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // POST - Add a new user
  const addUser = async () => {
    if (!form.name || !form.email) return alert("Please fill all fields");
    try {
      await fetch(baseUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setForm({ name: "", email: "" }); // Clear form after submit
      fetchUsers();
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  // PUT - Full update
  const updateUser = async (id) => {
    try {
      await fetch(`${baseUrl}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: "Updated Name", email: "new@example.com" }),
      });
      fetchUsers();
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  // PATCH - Partial update
  const patchUser = async (id) => {
    try {
      await fetch(`${baseUrl}/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: "Patched Name" }),
      });
      fetchUsers();
    } catch (error) {
      console.error("Error patching user:", error);
    }
  };

  // DELETE - Remove user
  const deleteUser = async (id) => {
    try {
      await fetch(`${baseUrl}/${id}`, {
        method: "DELETE",
      });
      fetchUsers();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>CRUD - Users</h2>
      <div style={{ marginBottom: "10px" }}>
        <input
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          style={{ marginRight: "10px", padding: "5px" }}
        />
        <input
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          style={{ marginRight: "10px", padding: "5px" }}
        />
        <button onClick={addUser} style={{ padding: "5px 10px" }}>
          Add User
        </button>
      </div>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {users.map((user) => (
          <li key={user.id} style={{ marginBottom: "10px" }}>
            <strong>{user.name}</strong> - {user.email}
            <button
              onClick={() => updateUser(user.id)}
              style={{ marginLeft: "10px" }}
            >
              PUT
            </button>
            <button
              onClick={() => patchUser(user.id)}
              style={{ marginLeft: "5px" }}
            >
              PATCH
            </button>
            <button
              onClick={() => deleteUser(user.id)}
              style={{ marginLeft: "5px", color: "red" }}
            >
              DELETE
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;