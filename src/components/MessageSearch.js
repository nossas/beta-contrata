import React, { Component } from "react";
import { connect } from "react-redux";
 
import { searchMessage } from "../actions";
import Button from "./Button";
 
const MessageSearch = ({ dispatch }) => {
  let searchInput;
 
  const onSubmit = event => {
    event.preventDefault();
    dispatch(searchMessage(searchInput.value));
  };

  return (
    <div className="search">
      <form className="search__form" onSubmit={onSubmit}>
        <input
          className="search__input"
          type="search"
          placeholder="Vê aqui o que tá rolando"
          ref={node => (searchInput = node)}
        />
 
        <Button style="btn btn--search" buttonType="submit">
          <img
            className=".btn__icon--search"
            src="./assets/icon/search.svg"
            alt="Search button"
          />
        </Button>
      </form>
      <span className="search__erro search__erro--hide">
        * O campo de pesquisa não pode ser vazio
      </span>
    </div>
  );
};
 
export default connect()(MessageSearch);