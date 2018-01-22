import React from 'react';
import PropTypes from 'prop-types';

function Card({ message }) {
  return (
    <div className="card-message">
     {message}
    </div>
  );
}

Card.propTypes = {
  message: PropTypes.string.isRequired
};

export default Card;