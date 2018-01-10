import React from 'react';

const UserItem = ({ user }) => {
  return (
    <li className="list-group-item">
      <img className="user-avatar" alt="User avatar" src={user.picture.thumbnail} />
      <span className="user-firstname">{user.name.first}</span> <span className="user-lastname">{user.name.last}</span>
    </li>
  );
}

export default UserItem;
