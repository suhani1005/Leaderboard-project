import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Leaderboard from './components/Leaderboard';
import UserControls from './components/UserControls';
import ClaimHistory from './components/ClaimHistory';
import './components/style.css';

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [history, setHistory] = useState([]);

  const fetchLeaderboard = async () => {
    const res = await axios.get('http://localhost:5000/api/leaderboard');
    setUsers(res.data);
  };

  useEffect(() => {
    fetchLeaderboard();
  }, []);

  return (
    <div className="container">
      <header>
        <h1>Dynamic Leaderboard</h1>
        <p>Track and manage user points in real-time</p>
      </header>

      <Leaderboard users={users} />

      <UserControls
        users={users}
        selectedUser={selectedUser}
        setSelectedUser={setSelectedUser}
        fetchLeaderboard={fetchLeaderboard}
        setHistory={setHistory}
      />

      <ClaimHistory history={history} />
    </div>
  );
}

export default App;
