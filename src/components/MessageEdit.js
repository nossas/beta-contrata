import React, { Component } from 'react';
import { connect } from 'react-redux';

import { saveMessage } from '../actions';
import Button from '../components/Button';

const MessageEdit = ({
  idMessage,
  chave,
  text,
  editing,
  isActive,
  saveMessage,
  dispatch
}) => {

  let inputChave, inputMsg;

  const onSubmit = e => {
    e.preventDefault();
    dispatch(saveMessage(idMessage, inputChave.value, inputMsg.value));
  };

  return (
    <form onSubmit={onSubmit}>
      <h2>Manda tua alteração aqui ❤️</h2>

      <div>
        <label for='chave'>Chave:</label>
        <input
          type='text'
          ref={node => (inputChave = node)}
          defaultValue={chave}
        />
      </div>

      <div>
        <label for='msg'>Mensagem:</label>
        <textarea
          ref={node => (inputMsg = node)}
          defaultValue={text}
        />
      </div>

      <Button buttonType='submit' style='btn btn--save'>
        <img className='.btn__icon--search' src='./assets/icon/save.svg' alt='Edit button' />
      </Button>
    </form>
  );
};

export default connect()(MessageEdit);