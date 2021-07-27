import React from 'react';
import './search.scss';

const Search = () => {
  return (
    <div className="search">
      <h1 className="search__title">Search flight</h1>
      <div className="search-field">
        <i className="fas fa-search search-field__icon"></i>
        <form className="search-field__form">
          <input
            className="search-field__input"
            type="text"
            placeholder="Airline, destination or flight #"
          />
          <button className="search-field__button">Search</button>
        </form>
      </div>
    </div>
  );
};

export default Search;
