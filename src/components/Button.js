import React from 'react';

const Button = ({onClick, children, style, icon}) => (

  <button 
    onClick={ onClick }
    className={style}
  >
    { children }
    { icon }
  </button>

);

export default Button;