import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './store';
import SearchButtons from './components/searchButtons/SearchButtons';
import Header from './components/header/Header';
import Search from './components/search/Search';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Search />
        <SearchButtons />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
