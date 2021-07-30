import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Schedule from '../schedule/Schedule';
import './searchButtons.scss';

const SearchButtons = () => {
  const { pathname, search } = useLocation();

  const departuresStylesBtn = pathname === '/departures' ? 'flights-board__btn_active' : '';
  const arrivalsStylesBtn = pathname === '/arrivals' ? 'flights-board__btn_active' : '';

  return (
    <>
      <section className="flights">
        <div className="flights-board">
          <Link
            to={`/departures${search}`}
            className={`flights-board__btn flights-board__btn_departures ${departuresStylesBtn}`}
          >
            <i className="fas fa-plane-departure flights-board__btn_icon"></i>
            Departures
          </Link>
          <Link
            to={`/arrivals${search}`}
            className={`flights-board__btn flights-board__btn_arrivals ${arrivalsStylesBtn}`}
          >
            <i className="fas fa-plane-arrival flights-board__btn_icon"></i>
            Arrivals
          </Link>
        </div>
        <Switch>
          <Route path="/:direction">
            <Schedule />
          </Route>
        </Switch>
      </section>
    </>
  );
};

export default SearchButtons;
