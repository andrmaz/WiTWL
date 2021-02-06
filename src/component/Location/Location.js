import React from 'react'
import './Location.scss';

const Location = ({ weather }) => {
    const { location } = weather;
    const country = location?.country ? location.country : '';
    const localtime = location?.localtime ? location.localtime : '';
    const name = location?.name ? location.name : '';
    const region = location?.region ? location.region : '';
    const tz = location?.tz_id ? location.tz_id : '';
    return (
        <aside className='box2'>
            <article className='wrapper'>
                <h2>Location</h2>
                <p>{`Country: ${country}`}</p>
                <p>{`Local Time: ${localtime}`}</p>
                <p>{`City: ${name}`}</p>
                <p>{`Region: ${region}`}</p>
                <p>{`Time Zone: ${tz}`}</p>
            </article>
        </aside>
    )
}

Location.propTypes = {
    weather(props, propName, componentName){
        if (typeof props[propName] !== 'object'){
            return new Error(
                `Hey, the component ${componentName} 
                needs the prop ${propName} to be an object,
                but you passed a ${typeof props[propName]}`
            )
        }
    },
}

export default Location
