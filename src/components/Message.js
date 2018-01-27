import React from 'react';

import Button from './Button';


const Message = ({ onEditClick, onSaveClick, onDeleteClick, children, isActive }) => (
  <li className='chat-list__item'>
    { children }
    <div className='chat-list__item__buttons'>
      <Button 
        onClick={ (onEditClick) } 
         style='btn'
      >
        <img className='.btn__icon--search' src='./assets/icon/cancel.svg' alt='Cancel button' />
      </Button>

      <Button 
        onClick={ onSaveClick } 
         style='btn'
      >
        <img className='.btn__icon--search' src='./assets/icon/edit.svg' alt='Edit button' />
      </Button>

      <Button 
        onClick={ onDeleteClick } 
         style='btn'
      >
        <img className='.btn__icon--search' src='./assets/icon/delete.svg' alt='Delete button' />
      </Button>

      <Button 
        onClick={ onDeleteClick } 
         style='btn'
      >
        <img className='.btn__icon--search' src='./assets/icon/active.svg' alt='Active button' />
      </Button>
    </div>
  </li>
)

export default Message;