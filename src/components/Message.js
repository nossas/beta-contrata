import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

const Message = ({ children, onClick, isActive }) => (
  <li>
    { children }
    
    <Button onclick={ onClick } style={ isActive }>
      Edit
    </Button>

    <Button onclick={ onClick } style={ isActive }>
      Save
    </Button>

    <Button onclick={ onClick } style={ isActive }>
      Delete
    </Button>
  </li>
)

Message.propTypes = {
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired
}

export default Message;