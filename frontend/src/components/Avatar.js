import React, { useState } from 'react';

const Avatar = ({ name, avatarUrl }) => {
  const [imgError, setImgError] = useState(false);

  if (avatarUrl && !imgError) {
    return (
      <img
        src={avatarUrl}
        alt={`${name}'s avatar`}
        className="avatar-circle"
        onError={() => setImgError(true)}
      />
    );
  }

  const initials = name
    ? name
        .split(' ')
        .map(n => n[0].toUpperCase())
        .join('')
    : '?';

  return <div className="avatar-circle">{initials}</div>;
};

export default Avatar;