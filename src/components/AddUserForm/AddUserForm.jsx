import React from 'react';
import { useState } from 'react';

const AddUser = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [users, setUsers] = useState([]);

  function userHandler(event) {
    if (!name.trim().length && !age.trim().length()) {
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
    <div>
      <div className='form-control'>
        <input
          type='text'
          placeholder='Name'
          onChange={(event) => setName(event.target.value)}
          value={name}
        />
        <input
          type='text'
          placeholder='Age'
          onChange={(event) => setAge(event.target.value)}
          value={age}
        />
        <button onClick={userHandler} className='btn btn-primary'>
          {' '}
          Add User
        </button>
      </div>
      <div>
        <ul className='list-group'>
          {users.map((user) => {
            return (
              <li key={Math.random()}>
                `Name is {user.name} and Age is {user.age}`
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default AddUser;
