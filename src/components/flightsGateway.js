import moment from 'moment';

export const fetchFlightsList = (direction, dateFlights) =>
  fetch(`https://api.iev.aero/api/flights/${dateFlights}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Failed to load data flights');
    })
    .then(dataFlights =>
      dataFlights.body[`${direction.slice(0, -1)}`].map(el => {
        const airlineName = el.airline ? el.airline.en.name : el['carrierID.code'];
        const airlineAvatar = el.airline ? el.airline.en.logoSmallName : null;
        const status = direction === 'departures' ? el.timeTakeofFact : el.timeLandFact;

        return {
          id: el.ID,
          terminal: el.term,
          localTime: new Date(el.timeDepShedule || el.timeToStand),
          status: new Date(status),
          flight: `${el['carrierID.IATA'] || el['carrierID.code']}${el.fltNo}`,
          airlineName,
          airlineAvatar,
          destination: el['airportToID.city_en'] || el['airportFromID.city_en'],
        };
      }),
    )
    .then(res => res.filter(el => moment(el.localTime).format('DD-MM-YYYY') === dateFlights))
    .catch(error => alert(error.message));
