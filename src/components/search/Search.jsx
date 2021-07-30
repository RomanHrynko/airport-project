import React, { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import qs from 'qs';
import './search.scss';

const Search = () => {
  const history = useHistory();
  const { search, pathname } = useLocation();

  const [inputData, setInputData] = useState({
    data: '',
    dataSearch: qs.parse(search, { ignoreQueryPrefix: true }).search,
  });

  const handleSearch = event => {
    event.preventDefault();

    const dataQuery = {
      ...qs.parse(search, { ignoreQueryPrefix: true }),
      search: inputData.data,
    };

    if (!inputData.data) {
      delete dataQuery.search;
    }

    const queryString = qs.stringify(dataQuery);
    history.push(`${pathname}?${queryString}`);
  };

  const handleChange = event =>
    setInputData({ ...inputData, data: event.target.value, dataSearch: event.target.value });

  return (
    <div className="search">
      <h2 className="search__title">Search Flight</h2>
      <div className="search-field">
        <i className="fas fa-search search-field__icon"></i>
        <form className="search-field__form" onSubmit={handleSearch}>
          <input
            className="search-field__input"
            type="text"
            placeholder="Airline, destination or flight #"
            value={inputData.dataSearch || inputData.data}
            onChange={handleChange}
          />
          <button className="search-field__btn" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
