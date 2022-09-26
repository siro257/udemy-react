import React, { useState } from 'react';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import MyButton from '../UI/MyButton';

import classes from './AddUser.module.css';

const AddUser = (props) => {
  const [username, setUsername] = useState('');
  const [userAge, setUserAge] = useState('');
  const [error, setError] = useState();

  const addUserHandler = (e) => {
    e.preventDefault();
    if (username.trim().length === 0 || userAge <= 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid input',
      });
      return;
    }
    console.log(username, userAge);
    props.onAddUser(username, userAge);
    setUsername('');
    setUserAge('');
  };

  const usernameChangeHandler = (e) => {
    setUsername(e.target.value);
  };

  const userAgeChangeHandler = (e) => {
    setUserAge(e.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
      <Card className={classes.input}>
        {' '}
        <form onSubmit={addUserHandler}>
          <label htmlFor='username'>Username</label>
          <input id='username' type='text' onChange={usernameChangeHandler} value={username} />
          <label htmlFor='age'>Age</label>
          <input id='age' type='number' onChange={userAgeChangeHandler} value={userAge} />
          <MyButton type='submit'>Add User</MyButton>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
