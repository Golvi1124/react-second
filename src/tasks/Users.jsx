import { useState } from "react";

export default function Users() {
  const mockData = [
    { username: "Ola Normann", email: "ola.normann@norge.no" },
    { username: "Torleif", email: "torleif@kodehode.no" },
    { username: "Jan Egil", email: "jan.egil@kodehode.no" },
    { username: "Sander", email: "sander@kodehode.no" },
  ];

  const [users, setUsers] = useState(mockData);
  // State to hold the new user details, This will be used to add a new user to the list.
  const [newUser, setNewUser] = useState({});

  function handleUpdate(e) {
    const { name, value } = e.target;
    setNewUser((prev) => ({ ...prev, [name]: value }));
    // This updates the newUser state with the input values.
    // The spread operator (...) is used to keep the previous values and update only the changed one.
  }

  function addUser() {
    // Check if all fields are filled
    if (newUser.username && newUser.email) {
      setUsers((prev) => [newUser, ...prev]);
      setNewUser({}); // Reset newUser state after adding it to the list
    } else {
      alert("Please fill in all fields.");
    }
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h2>User component</h2>
      <p>Here you can add new users:</p>

      <input
        type="text"
        name="username"
        placeholder="Username here"
        value={newUser.username || ""} // To avoid uncontrolled input warning
        // value is set to newUser.username or an empty string if newUser.username is undefined
        onChange={handleUpdate}
      />
      <input
        type="email"
        name="email"
        placeholder="Email here"
        value={newUser.email || ""}
        onChange={handleUpdate}
      />
      <button onClick={addUser}>Add User</button>

      <h3>Current Users:</h3>
      <ul>
        {users.map((user, i) => (
          <li key={i}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "4px 0",
                borderBottom: "1px solid #ddd",
              }}
            >
              <span>{user.username}</span>
              <span>{user.email}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
