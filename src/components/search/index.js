import React from 'react';
import PropTypes from 'prop-types';

function Search({ searchMessage, className }) {
  return (
    <label>
      <input type="text"
             onChange={(e) => searchMessage(e.target.value)}
             className={className}
             name="search" />
    </label>
  );
}

Search.propTypes = {
  item: PropTypes.string
};

export default Search;