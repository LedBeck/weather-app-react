import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
} from '../constants/weathers';

const WeatherData = () => {
    return (
    <div>
        <WeatherTemperature 
        temperature = {20}
        weatherState = {CLOUD}></WeatherTemperature>
        <WeatherExtraInfo humidity = {80} wind={"10km/s"}></WeatherExtraInfo>
    </div>
    );
}

export default WeatherData;