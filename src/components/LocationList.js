import React from 'react';
import LocationCard from './LocationCard.js';
import '../styles/LocationList.css';
import locationData from '../datas/datas.json';

const LocationList = () => {
  return (
    <div className="location-list-container">
      {locationData.map(location => (
        <LocationCard key={location.id} id={location.id} />
      ))}
    </div>
  );
};

export default LocationList;