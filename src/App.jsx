import React from 'react';
import Search from './components/search/Search.jsx';
import FlightBoard from './components/flights-board/FlightsBoard.jsx';
import store from './store.js';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <Search />
      <FlightBoard />
    </Provider>
  );
};

export default App;
