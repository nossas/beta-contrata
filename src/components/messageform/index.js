import React from 'react';
import PropTypes from 'prop-types';

import Validate from './validate';

class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      key: '',
      oldKey: '',
      errors: {}
    };
  }

  componentDidMount() {
    this.message.value = this.props.message;
    this.key.value = this.props.id; 
  }

  onChange = (event) => {
    let message = event.target.value;
    let inputName = event.target.name;
    this.setState({
      ...this.state,
      [inputName]: message
    });
  }

  onSubmit = (event) => {
    event.preventDefault();

    const rules = { key: ['required'], message: ['required'] };
    
    let error = new Validate(
      { 
        key: this.key.value, 
        message: this.message.value
      }, rules).getErrors();

    if (error.key || error.message) {
      this.setState({
        ...this.state,
        errors: error
      });
    } else {
      this.props.handleSubmit(this.oldKey.value, this.key.value, this.message.value );
    }
  }

  render() {
    return (
      <form className="form-message" onSubmit={this.onSubmit}>
        <input type="hidden"
                 ref={oldKey => { this.oldKey = oldKey; }}
                 value={this.props.id}
                 name="oldKey" />
        <label>
          <input type="text"
                 ref={key => { this.key = key; }}
                 onChange={this.onChange}
                 name="key" />
          <span>{this.state.errors.key}</span>
        </label>
        <label>
          <textarea rows="6" 
                    cols="30"  
                    onChange={this.onChange}
                    ref={msg => { this.message = msg; }}
                    name="message">
          </textarea>       
          <span>{this.state.errors.message}</span>
        </label>
        <button type="submit" className="btn">{'Editar'}</button>
     </form>  
    );
  }
}

MessageForm.propTypes = {
  id: PropTypes.string,
  message: PropTypes.string
};

export default MessageForm;

/*

<input type="text"
                 onChange={this.onChange}
                 ref={msg => { this.message = msg; }}
                 name="message" />
          <span>{this.state.errors.message}</span>

*/