import React from 'react';
import Avatar from './Avatar';  // ✅ Import Avatar component

const Leaderboard = ({ users }) => {
  return (
    <div className="card leaderboard">
      <h2 className="card-title">Current Rankings</h2>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>User</th>
            <th>Total Points</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user._id}>
              <td>{index + 1}</td>
              <td>
                <div className="avatar-container">
                  <Avatar name={user.name} avatarUrl={user.avatarUrl} />  {/* ✅ Here */}
                  <span>{user.name}</span>
                </div>
              </td>
              <td>{user.totalPoints}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;