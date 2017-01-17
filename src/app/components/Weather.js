import React from 'react';
import {WeatherForm} from './WeatherForm'
import {WeatherMessage} from './WeatherMessage'
// import {openWeatherMap} from '../api/openWeatherMap'
import axios from 'axios';

export class Weather extends React.Component {
    constructor(props) {
        super();
        this.state = {
            isLoading: false
        }
    }
    handleSearch(location) {
      debugger;
        let that = this;
        that.setState({isLoading: true})
        const OPEN_WEATHER_MAP_URL = "http://api.openweathermap.org/data/2.5/weather?q=" + location + "&units=metric&appid=b3d4bd0dd79135f2af75c6230258fdfc";
        let requestUrl = OPEN_WEATHER_MAP_URL;
        return axios.get(requestUrl).then(function(res) {
            that.setState({
              location: location,
               temp: res.data.main.temp
             });
        }, function(res) {
            throw new Error(res.data);
        });
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <h3>Weather component
                    </h3>
                    <WeatherForm onSearch={this.handleSearch.bind(this)}/>
                    <WeatherMessage location={this.state.location} temp={this.state.temp} isLoading={this.state.isLoading}/>
                </div>
            </div>
        );
    }
}
