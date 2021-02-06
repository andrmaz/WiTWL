import React from 'react';
import PropTypes from 'prop-types'; // ES6
import './Search.scss';

const Search = ({ city, handleChange, handleSubmit }) => {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    City :
                    <input 
                        id='q'
                        required
                        pattern='^[a-zA-Z]+$'
                        title='Search by city'
                        type="text" 
                        name="city" 
                        value={city}
                        onChange={handleChange}
                    />
                </label>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}

Search.propTypes = {
    handleSubmit: PropTypes.func,
    city: PropTypes.string,
    handleChange: PropTypes.func,
}

export default Search;
