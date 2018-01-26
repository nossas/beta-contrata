import React from 'react';

import Button from './Button';


const Message = ({ onEditClick, onSaveClick, onDeleteClick, children, isActive }) => (
  <li>
    { children }
    <Button 
      onClick={ (onEditClick) } 
      style={ isActive }
    >
      Edit
    </Button>

    <Button 
      onClick={ onSaveClick } 
      style={ isActive }
    >
      Save
    </Button>

    <Button 
      onClick={ onDeleteClick } 
      style={ isActive }
    >
      Delete
    </Button>
  </li>
)

export default Message;