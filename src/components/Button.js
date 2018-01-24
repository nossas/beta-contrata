import React from 'react';
import PropTypes from 'prop-types';

const Button = ({onClick, children, isActive, icon}) => (

  <button 
    onClick={ isActive ? onClick : null }
    style={{ textDecoration: !isActive ? 'btn--inactive' : 'none' }}
  >
    { children }
    { icon ? <img className="btn__icon" src={icon}/> : null }
  </button>

);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default Button;