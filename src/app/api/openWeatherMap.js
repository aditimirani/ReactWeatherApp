import axios from 'axios';

const OPEN_WEATHER_MAP_URL = "http://api.openweathermap.org/data/2.5/weather?units=metric&appid=b3d4bd0dd79135f2af75c6230258fdfc";
const openWeatherMap = {
    getTemp(location) {
        console.log("location::" + location);
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = '${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}';
        return axios.get(requestUrl).then(function(res) {
            return res.data.main.temp;
        }, function(res) {
            throw new Error(res.data.message);
        });
    }
}
export default openWeatherMap;
