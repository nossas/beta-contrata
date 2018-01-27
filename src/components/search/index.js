import React from 'react';
import PropTypes from 'prop-types';

function Search({ searchMessage, className }) {
  return (
    <div className={className}>
      <label className="wrapper">
        <input type="text"
               onChange={(e) => searchMessage(e.target.value)}
               className="input"
               placeholder="pesquise um menssagem..."
               name="search" />      
        <i className="fa fa-search icon" aria-hidden="true" />      
      </label>
    </div>
  );
}

Search.propTypes = {
  item: PropTypes.string
};

export default Search;