import { fetchFlightsList } from './flightsGateway';

export const GET_FLIGHTS_LIST = 'GET_FLIGHTS_LIST';

export const setFlightsList = flightsList => {
  return {
    type: GET_FLIGHTS_LIST,
    payload: {
      flightsList,
    },
  };
};

export const getFlightsList = (direction, dateFlights) => {
  const thunkAction = function (dispatch) {
    fetchFlightsList(direction, dateFlights).then(flightsList =>
      dispatch(setFlightsList(flightsList)),
    );
  };
  return thunkAction;
};
