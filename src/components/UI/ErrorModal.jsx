import React from 'react';
import Card from './Card';
import MyButton from './MyButton';
import classes from './ErrorModal.module.css';

const ErrorModal = (props) => {
  return (
    <>
      <div className={classes.backdrop} onClick={props.onConfirm}></div>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.title}</p>
        </div>
        <footer className={classes.actions}>
          <MyButton onClick={props.onConfirm}>Okay</MyButton>
        </footer>
      </Card>
    </>
  );
};

export default ErrorModal;
