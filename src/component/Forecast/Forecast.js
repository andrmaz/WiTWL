import React from 'react';
import PropTypes from 'prop-types';
import './Forecast.scss';

function Forecast({ weather }) {
    return (
        <section className='box4'>
            <h1 className='title'>Forecast</h1> 
            <div className='forecast'>
                {
                    weather?.forecast?.forecastday.map((day) => (
                        <div key={day.date} className='card'>
                            <p>{day.day.condition.text}</p>
                            <span>{`Date: ${day.date}`}</span>
                            <img 
                                src={`http:${day.day.condition.icon}`} 
                                alt='forecastday'
                            />
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

Forecast.propTypes = {
    weather: PropTypes.object
};

export default Forecast;

