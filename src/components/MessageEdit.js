import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from '../components/Button';

const MessageEditContainer = ({
  idMessage,
  chave,
  text,
  editing,
  isActive,
  saveMessage
}) => {

  let inputChave, inputMsg;

  const onSubmit = e => {
    e.preventDefault();
    editing = {editing}
    saveMessage(idMessage, inputChave.value, inputMsg.value, editing);
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

      <Button buttonType='submit' style={isActive}>
        Salvar
      </Button>
    </form>
  );
};

export default connect()(MessageEditContainer);