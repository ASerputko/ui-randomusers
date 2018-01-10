import React from 'react';
import UserItem from './UserItem';

const UserList = ({ users }) => {
  return (
    <ul class="list-group">
      { users.map((user) => <UserItem key={user.email} user={user} />) }
    </ul>
  );
}

export default UserList;
