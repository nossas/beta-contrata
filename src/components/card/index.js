import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    return (
      <div className="card-message">
        {this.props.item}
        <a href="javascript:void(0)"
          data-message_id={this.props.id}
          onClick={this.props.setCurrentMessage}>Editar</a>
        <a href="javascript:void(0)"
          data-message_id={this.props.id}
          onClick={this.props.removeMessage}>x</a>  
      </div>
    );
  }
}

Card.propTypes = {
  item: PropTypes.string.isRequired
};

export default Card;