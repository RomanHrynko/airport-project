import React from 'react';
import './table.scss';
import FlightTable from './FlightTable.jsx';

const Table = () => {
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
        <FlightTable />
      </tbody>
    </table>
  );
};

export default Table;
