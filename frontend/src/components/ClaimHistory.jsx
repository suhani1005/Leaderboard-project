import React from 'react';

const ClaimHistory = ({ history }) => {
  return (
    <div className="card history">
      <h2 className="card-title">Point Claims History</h2>
      <table>
        <thead>
          <tr>
            <th>User</th>
            <th>Points</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {history.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>+{item.points}</td>
              <td>{item.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClaimHistory;