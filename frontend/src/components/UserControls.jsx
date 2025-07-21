import React, { useState } from 'react';
import axios from 'axios';

const UserControls = ({ users, selectedUser, setSelectedUser, fetchLeaderboard, setHistory }) => {
  const [newUser, setNewUser] = useState('');

  const handleClaimPoints = async () => {
    if (!selectedUser) return alert('Please select a user first.');

    const points = Math.floor(Math.random() * 10) + 1;
    await axios.post(`http://localhost:5000/api/claim/${selectedUser._id}`, { points });
    setHistory(prev => [{ name: selectedUser.name, points, time: new Date().toLocaleTimeString() }, ...prev]);
    fetchLeaderboard();
  };

  const handleAddUser = async () => {
    if (!newUser.trim()) return alert('Enter user name.');

    await axios.post('http://localhost:5000/api/adduser', { name: newUser });
    setNewUser('');
    fetchLeaderboard();
  };

  return (
    <div className="card control-panel">
      <h2 className="card-title">User Controls</h2>

      <select
        value={selectedUser ? selectedUser._id : ''}
        onChange={e => {
          const found = users.find(u => u._id === e.target.value);
          setSelectedUser(found || null);
        }}
      >
        <option value="">Select a user</option>
        {users.map(user => (
          <option key={user._id} value={user._id}>
            {user.name} ({user.totalPoints} pts)
          </option>
        ))}
      </select>

      <button className="btn-claim" onClick={handleClaimPoints}>
        Claim Random Points (1-10)
      </button>

      <input
        type="text"
        placeholder="Enter new user name"
        value={newUser}
        onChange={e => setNewUser(e.target.value)}
      />
      <button onClick={handleAddUser}>Add User</button>
    </div>
  );
};

export default UserControls;