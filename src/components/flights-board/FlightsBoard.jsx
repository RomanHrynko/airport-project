import React from 'react';
import './flightsBoard.scss';
import Table from '../table/Table.jsx';
import { fetchFlightsData } from '../flightsGateway';

const FlightBoard = () => {
  const getFlightsData = () => {
    fetchFlightsData();
  };
  console.log(getFlightsData());

  return (
    <section className="flight-board">
      <div className="switch-board">
        <a href="" className="switch-board__btn switch-board__btn-departures">
          <i className="fas fa-plane-departure"></i>
          Departures
        </a>
        <a href="" className="switch-board__btn switch-board__btn-arrivals">
          <i className="fas fa-plane-arrival"></i>
          Arrivals
        </a>
      </div>
      <Table />
    </section>
  );
};

export default FlightBoard;
