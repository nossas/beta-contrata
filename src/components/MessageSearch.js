import React, { Component } from 'react';
import { connect } from 'react-redux';

import { searchMessage } from '../actions';
import Button from './Button';

let MessageSearch = ({dispatch}) => {

  return(
    <div className='search'>
      <form className='search__form'>
        <input 
          className='search__input' 
          type='search' 
          placeholder='Vê aqui o que tá rolando'
          /*ref={node => {inputSearch = node}}
          onChange={ dispatch(searchMessage(inputSearch.value.trim().toLowerCase())) }*/                
        />

        <Button style='btn btn--search' buttonType='submit' >
          <img className='.btn__icon--search' src='./assets/icon/search.svg' alt='logo Beta a Robô' />
        </Button>
        
      </form>
      <span className='search__erro search__erro--hide' ref='erro'>* O campo de pesquisa não pode ser vazio</span>
    </div>
  );
}

MessageSearch = connect()(MessageSearch)
export default MessageSearch;