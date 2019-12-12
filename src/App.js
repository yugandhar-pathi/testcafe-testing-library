import React, { useEffect, useState } from "react";

import { makeServer } from "./server";

if (process.env.NODE_ENV === "development") {
  makeServer();
}

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/users")
      .then(res => res.json())
      .then(response => {
        setUsers(response.users);
      });
  }, []);

  return (
    <div className="App">
      {users.length === 0 && <p>Loading...</p>}
      {users.length > 0 && (
        <>
          <p data-testid="userList">List of users</p>
          <ul>
            {users.map((user, index) => (
              <li key={`user${index}`}>{user.name}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default App;
