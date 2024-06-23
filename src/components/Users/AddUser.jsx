import React from 'react';
import { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import './AddUser.css';

const AddUser = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [users, setUsers] = useState([]);

  function userHandler(event) {
    if (!name.trim().length && !age.trim().length) {
      alert('Invalid Input');
      return;
    }
    event.preventDefault();
    console.log(name, age);
    setUsers([...users, { name, age }]);
    setName('');
    setAge('');
  }

  return (
    <Card className='input'>
      <form action=''>
        <h1 style={{ marginLeft: '50%' }}>Ok Google</h1>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Name'
            onChange={(event) => setName(event.target.value)}
            value={name}
            className='form-control'
          />
          <input
            type='text'
            placeholder='Age'
            onChange={(event) => setAge(event.target.value)}
            value={age}
            className='form-control'
          />
          <Button onClick={userHandler}>Add User</Button>
        </div>
        <br />
        <div>
          <ul className='list-group'>
            {users.map((user, index) => {
              return (
                <li
                  key={index}
                  className='list-group-item list-group-item-info'
                >
                  {user.name} is of {user.age} years in age.
                </li>
              );
            })}
          </ul>
        </div>
      </form>
    </Card>
  );
};

export default AddUser;
