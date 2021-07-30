import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from './store';
import SearchButtons from './components/searchButtons/SearchButtons';
import Header from './components/header/Header';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Header />
            <SearchButtons />
          </Route>
          <Route path="/:direction">
            <Header />
            <SearchButtons />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
