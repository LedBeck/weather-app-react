import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';

const icons = {
    sun : 'day-sunny',
    rain: 'rain',
    cloud: 'cloud',
    cloudy: 'cloudy',
    snow: 'snow',
    windy: 'windy',

}

const getWeatherIcon = weatherState => {
    const icon = icons[weatherState];
    if(icon)
        return  <WeatherIcons name={icon} size="2x"></WeatherIcons>;
    else 
        return <WeatherIcons name={"day-sunny"} size="2x"></WeatherIcons>;
}

const WeatherTemperature = ({temperature, weatherState}) => {
    return (
    <div>
        {
            getWeatherIcon(weatherState)
        }
        <span>{`${temperature} Cº`}</span>
    </div>
    );
}

WeatherTemperature.propTypes = {
    temperature: PropTypes.number,
    weatherState: PropTypes.string,
}

export default WeatherTemperature;