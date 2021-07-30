import { createSelector } from 'reselect';

export const flightsListSelector = state => {
  return state.flights.flightsList;
};

export const sortedFlightsListSelector = createSelector([flightsListSelector], flightsList => {
  return flightsList.sort((a, b) => new Date(a.localTime) - new Date(b.localTime));
});
