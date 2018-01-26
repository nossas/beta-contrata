import React from 'react';

const Button = ({onClick, children, isActive, icon}) => (

  <button 
    onClick={ onClick }
    style={{ disabled: !isActive ? true : false }}
  >
    { children }
    { icon ? <img className="btn__icon" src={icon}/> : null }
  </button>

);

export default Button;