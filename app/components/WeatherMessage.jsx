const React = require('react');

let WeatherMessage = ({temp, location}) => <h3 className='text-center'>It's currently {temp}°C in {location}.</h3>;

module.exports = WeatherMessage;