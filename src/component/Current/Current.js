import React from 'react';
import PropTypes from 'prop-types';
import './Current.scss';

const Current = ({ weather }) => {
    const { current } = weather;
    const text = current?.condition.text ? current.condition.text : '';
    const update = current?.last_updated ? current.last_updated : '';
    return (
        <section className='box3'>
            <article className="wrapper">
                <h1>Current weather</h1>
                <p>{`Condition: ${text}`}</p>
                {
                    current?.condition.icon ?
                    <img 
                        src={`http:${current?.condition.icon}`} 
                        alt='weather' 
                    /> : ''
                }
                <p>{`Last updated: ${update}`}</p>
            </article>
        </section>
    );
};

Current.propTypes = {
    weather: PropTypes.object
};

export default Current;
