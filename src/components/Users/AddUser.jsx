import React from 'react';
import { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import './AddUser.css';

const AddUser = (props) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  function userHandler(event) {
    event.preventDefault();
    if (!name.trim().length && !age.trim().length) {
      alert('Invalid Input');
      return;
    }
    if (+age < 1) {
      alert('Invalid Age');
      return;
    }
    props.onAddUser({ name, age }); // updates the state in App.js/parent component
    setName('');
    setAge('');
  }

  return (
    <Card className='input'>
      <form action=''>
        <h1 style={{ marginLeft: '40%' }}>Ok Google</h1>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Name'
            onChange={(event) => setName(event.target.value)}
            value={name}
            className='form-control'
          />
          <input
            type='number'
            placeholder='Age'
            onChange={(event) => setAge(event.target.value)}
            value={age}
            className='form-control'
          />
          <Button onClick={userHandler}>Add User</Button>
        </div>
      </form>
    </Card>
  );
};

export default AddUser;
