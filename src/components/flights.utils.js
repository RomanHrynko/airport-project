import moment from 'moment';

export const newStatus = (status, direction) => {
  const formatStatus = status.getTime();

  const action = direction === 'arrivals' ? 'Landed' : 'Departed at';
  if (!formatStatus) {
    return 'On time';
  }
  const time = moment(formatStatus).format('HH:mm');

  return `${action} ${time}`;
};

export const searchFlightListFiltered = (flightsList, searchData) =>
  searchData
    ? flightsList.filter(
        ({ flight, destination, airlineName }) =>
          flight.toLowerCase().includes(searchData.toLowerCase()) ||
          destination.toLowerCase().includes(searchData.toLowerCase()) ||
          airlineName.toLowerCase().includes(searchData.toLowerCase()),
      )
    : flightsList;
