import { GET_FLIGHTS_LIST } from './flights.actions';

const initialState = {
  flightsList: [],
};

const flightsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FLIGHTS_LIST:
      return {
        ...state,
        flightsList: action.payload.flightsList,
      };
    default:
      return state;
  }
};

export default flightsReducer;
