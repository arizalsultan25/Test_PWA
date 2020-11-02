import axios from 'axios';

const url = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = 'f33a484cf794d08d0148764789aaba32';

const fetchWeather = async (town) => {
    const {data} = await axios.get(url, {
        params: {
            q: town,
            units : 'metric',
            APPID: API_KEY,
        }
    });

    return data;
}

export default fetchWeather;