import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    return (
      <div className="card-message">
        <div className="text">
          {this.props.item}
        </div>
        <div className="actions">
          <a href="javascript:void(0)"
            data-message_id={this.props.id}
            onClick={this.props.setCurrentMessage}>
            <i className="fa fa-pencil icon" aria-hidden="true" />
          </a>
          <a href="javascript:void(0)"
            data-message_id={this.props.id}
            onClick={this.props.removeMessage}>
            <i className="fa fa-trash icon" aria-hidden="true" />
          </a> 
        </div> 
      </div>
    );
  }
}

Card.propTypes = {
  item: PropTypes.string.isRequired
};

export default Card;