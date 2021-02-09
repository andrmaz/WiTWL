import React from 'react';
import PropTypes from 'prop-types';
import './Search.scss';

const Search = ({ city, handleChange, handleSubmit }) => {
    return (
        <div className='box1'>
            <form onSubmit={handleSubmit}>
                <label className="label">
                    City : &nbsp; 
                    <input 
                        id='q'
                        required
                        pattern='^([a-zA-Z]+\s)*[a-zA-Z]+$'
                        title='Please make sure to remove unused white space'
                        type="text" 
                        name="city" 
                        value={city}
                        size='30'
                        maxLength="20"
                        onChange={handleChange}
                    />
                </label>
                <input id='button' type="submit" value="Submit"/>
            </form>
        </div>
    );
};

Search.propTypes = {
    handleSubmit: PropTypes.func,
    city: PropTypes.string,
    handleChange: PropTypes.func,
};

export default Search;
