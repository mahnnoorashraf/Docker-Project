import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newUser, setNewUser] = useState({ name: '', email: '' });
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await axios.get('/api/users');
      setUsers(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch users: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newUser.name || !newUser.email) {
      setError('Please fill in all fields');
      return;
    }

    try {
      const response = await axios.post('/api/users', newUser);
      setUsers([...users, response.data]);
      setNewUser({ name: '', email: '' });
      setMessage('User created successfully!');
      setError(null);
      setTimeout(() => setMessage(''), 3000);
    } catch (err) {
      setError('Failed to create user: ' + err.message);
    }
  };

  const handleInputChange = (e) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="container">
      <div className="header">
        <h1>🐳 Docker Compose Application</h1>
        <p>Simple Frontend + Backend with Docker</p>
      </div>

      {error && <div className="error">{error}</div>}
      {message && <div className="success">{message}</div>}

      <div className="card">
        <h2>Add New User</h2>
        <form onSubmit={handleSubmit} className="user-form">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={newUser.name}
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={newUser.email}
            onChange={handleInputChange}
          />
          <button type="submit">Add User</button>
        </form>
      </div>

      <div className="card">
        <h2>Users List</h2>
        {loading ? (
          <p>Loading users...</p>
        ) : (
          <div>
            {users.length === 0 ? (
              <p>No users found</p>
            ) : (
              users.map(user => (
                <div key={user.id} className="user-card">
                  <h3>{user.name}</h3>
                  <p>Email: {user.email}</p>
                  <p>ID: {user.id}</p>
                </div>
              ))
            )}
          </div>
        )}
        <button onClick={fetchUsers} style={{ marginTop: '10px' }}>
          Refresh Users
        </button>
      </div>

      <div className="card">
        <h2>Application Info</h2>
        <p><strong>Frontend:</strong> React App running in Docker container</p>
        <p><strong>Backend:</strong> Node.js/Express API running in Docker container</p>
        <p><strong>Communication:</strong> Docker Compose networking</p>
        <p><strong>Status:</strong> ✅ Application is running successfully!</p>
      </div>
    </div>
  );
}

export default App;
