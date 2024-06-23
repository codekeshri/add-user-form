import React from 'react';
import { useState } from 'react';
import './Button.css';

const Button = (props) => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

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
    <button className='btn btn-info button' type='submit' onClick={userHandler}>
      {props.children}
    </button>
  );
};

export default Button;
