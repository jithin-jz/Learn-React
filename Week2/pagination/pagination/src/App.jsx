import React, { useEffect, useState } from "react";

const App = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 5; // items per page

  const fetchUsers = async () => {
    const res = await fetch(`http://localhost:3000/users?_page=${page}&_limit=${limit}`);
    const data = await res.json();
    const totalCount = res.headers.get("X-Total-Count"); // Total records
    setUsers(data);
    setTotalPages(Math.ceil(totalCount / limit));
  };

  useEffect(() => {
    fetchUsers();
  }, [page]);

  return (
    <div>
      <h2>Paginated Users</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

      <div style={{ marginTop: 20 }}>
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          Prev
        </button>
        <span style={{ margin: "0 10px" }}>Page {page} of {totalPages}</span>
        <button onClick={() => setPage(page + 1)} disabled={page === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
