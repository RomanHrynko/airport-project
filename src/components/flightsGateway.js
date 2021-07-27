import moment from 'moment';

const baseUrl = 'https://api.iev.aero/api/flights';

export const fetchFlightsData = () =>
  fetch(`${baseUrl}/${moment(new Date()).format('DD-MM-YYYY')}`).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error();
  });
