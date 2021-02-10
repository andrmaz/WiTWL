import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { apiCall } from './api/apiCall';
import Search from './component/Search/Search';
import Current from './component/Current/Current';
import Forecast from './component/Forecast/Forecast';
import Location from './component/Location/Location';
import ErrorFallback from './component/ErrorFallback/ErrorFallback';
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
        const { weather, city } = this.state;
        return (
            <div className='container'>
                <ErrorBoundary
                    FallbackComponent={ErrorFallback}
                    onReset={() => {
                        /* reset the state of your app 
                        so the error doesn't happen again */

                        this.setState({ weather: {}});
                        this.setState({ city: ''});
                    }}
                    resetKeys={[weather, city]}
                >
                    <main>
                        <Search
                            city={city}
                            handleChange={this.handleChange} 
                            handleSubmit={this.handleSubmit} 
                        />
                        <Location weather={weather} />
                        <Current weather={weather} />
                        <Forecast weather={weather} />
                    </main> 
                </ErrorBoundary>
                <a href="https://icons8.com/icon/D2RKDghvz9nr/tempo-piovoso">
                    Tempo piovoso icon by Icons8
                </a>
            </div>
        );
    };
};

export default App;
