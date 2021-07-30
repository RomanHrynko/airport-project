import React, { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import qs from 'qs';
import moment from 'moment';
import FlightsBoard from '../flightsBoard/FlightsBoard';
import { getFlightsList } from '../flights.actions';
import { sortedFlightsListSelector } from '../flights.selectors';
import { searchFlightListFiltered } from '../flights.utils';
import './schedule.scss';

const Schedule = () => {
  const flightsList = useSelector(state => sortedFlightsListSelector(state));
  const dispatch = useDispatch();

  const { search, pathname } = useLocation();
  const { direction } = useParams();

  const searchFlight = qs.parse(search, { ignoreQueryPrefix: true }).search;
  const newFlightsList = searchFlightListFiltered(flightsList, searchFlight);

  useEffect(() => {
    const date = moment(new Date()).format('DD-MM-YYYY');

    dispatch(getFlightsList(direction, date));
  }, [search, pathname]);

  if (flightsList.length === 0) {
    return null;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Terminal</th>
          <th>Local time</th>
          <th>Destination</th>
          <th>Status</th>
          <th>Airline</th>
          <th>Flight</th>
        </tr>
      </thead>
      <tbody>
        {newFlightsList.length === 0 ? (
          <tr>
            <th className="no-flights" colSpan="6">
              No flights
            </th>
          </tr>
        ) : (
          newFlightsList.map(flight => (
            <FlightsBoard key={flight.id} {...flight} direction={direction} />
          ))
        )}
      </tbody>
    </table>
  );
};

export default Schedule;
