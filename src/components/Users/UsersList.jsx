import React from 'react';
import Card from '../UI/Card';
import './UsersList.css';

const UserList = (props) => {
  return (
    <Card className='users'>
      <ul className='list-group'>
        {props.users.map((user, index) => {
          return (
            <li key={index} className='list-group-item list-group-item-info'>
              {user.name} ({user.age} years old)
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default UserList;
