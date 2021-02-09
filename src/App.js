/* eslint-disable max-len */
/* eslint-disable quotes */

import React from 'react';
import { apiCall } from './api/apiCall';
import Search from './component/Search/Search';
import Current from './component/Current/Current';
import Forecast from './component/Forecast/Forecast';
import Location from './component/Location/Location';
import './App.scss';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: '',
            weather: {},
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChange(event){
        this.setState({ city: event.target.value });
    };

    async handleSubmit(event){
        event.preventDefault();
        const data = await apiCall(this.state.city);
        this.setState({ weather: data});
    };

    render() {
        const { weather } = this.state;
        return (
            <div className='container'>
                <main>
                    <Search
                        city={this.state.city}
                        handleChange={this.handleChange} 
                        handleSubmit={this.handleSubmit} 
                    />
                    <Location weather={weather} />
                    <Current weather={weather} />
                    <Forecast weather={weather} />
                </main> 
                <a href="https://icons8.com/icon/D2RKDghvz9nr/tempo-piovoso">Tempo piovoso icon by Icons8</a>
            </div>
        );
    };
};

export default App;
