import axios from "axios";

export const CONST = {
    mainColor: '#3a86ff',
    api: {
        // url: 'https://api.tomorrow.io/v4/timelines?location=40.75872069597532,-73.98529171943665&fields=temperature&timesteps=1h&units=metric&apikey=9HVqc4NtVELAo2Gx0VO3s4VxnQRn76Ic',
        url: 'https://api.tomorrow.io/v4/weather',
        key: '9HVqc4NtVELAo2Gx0VO3s4VxnQRn76Ic',
    }
}

export const public_path = (path) => {
    return `${process.env.PUBLIC_URL}/${path}`;
};

export const get_card_date = (date) => {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        currentDate = new Date(date);

    return {
        day: daysOfWeek[currentDate.getDay()],
        dt: `${monthsOfYear[currentDate.getMonth()]} ${currentDate.getDate()}`,
    };
}

export const get_weather_of_today = (callback, location = 'new york') => {
    const url = `${CONST.api.url}/realtime?location=${location}&apikey=${CONST.api.key}`
    axios.get(url).then(response => callback(response)).catch(error => console.error(error))
}

export const get_weather_of_5_days = (callback, location = 'new york') => {
    const url = `${CONST.api.url}/forecast?location=${location}&apikey=${CONST.api.key}`
    axios.get(url).then(response => callback(response)).catch(error => console.error(error))
}

export const get_weather_card_data = (weathers) => {
    let result = []

    for (const [index, weather] of weathers.entries()) {
        if (index <= 0)
            continue

        const values = weather.values
        result.push({
            key: index,
            date: weather.time,
            icon: get_weather_icon(values.weatherCodeMax),
            temp: parseInt(values.temperatureAvg),
        })
    }

    return result
}

export const get_weather_icon = (weather_code) => {
    const weather_code_to_string = weather_code.toString()

    if (weather_code_to_string.startsWith('1')) {
        switch (weather_code) {
            case 1000:
                return 'day'
                break;

            case 1100:
                return 'cloudy-day-1'
                break;

            case 1101:
                return 'cloudy-day-2'
                break;

            case 1102:
                return 'cloudy-day-3'
                break;

            case 1000:
                return 'cloudy'
                break;

            case 1103:
                return 'cloudy-day-1'
                break;

            default:
                return 'cloudy-day-1'
                break;
        }
    } else if (weather_code_to_string.startsWith('2')) {
        switch (weather_code) {
            case 2100:
                return 'cloudy'
                break;

            case 2000:
                return 'cloudy'
                break;

            default:
                return 'cloudy'
                break;
        }
    } else if (weather_code_to_string.startsWith('4')) {
        switch (weather_code) {
            case 4000:
                return 'rainy-4'
                break;

            case 4200:
                return 'rainy-5'
                break;

            case 4001:
                return 'rainy-6'
                break;

            case 4201:
                return 'rainy-7'
                break;

            case 4203:
                return 'rainy-1'
                break;

            case 4204:
                return 'rainy-1'
                break;

            case 4201:
                return 'rainy-7'
                break;

            case 4201:
                return 'rainy-7'
                break;

            case 4201:
                return 'rainy-7'
                break;

            default:
                return 'rainy-1'
                break;
        }
    } else if (weather_code_to_string.startsWith('5')) {
        switch (weather_code) {
            case 5001:
                return 'snowy-4'
                break;

            case 5100:
                return 'snowy-5'
                break;

            case 5000:
                return 'snowy-6'
                break;

            case 5101:
                return 'snowy-6'
                break;

            case 5115:
                return 'snowy-1'
                break;

            case 5116:
                return 'snowy-2'
                break;

            case 5117:
                return 'snowy-3'
                break;

            case 5122:
                return 'snowy-6'
                break;

            default:
                return 'snowy-4'
                break;
        }
    } else if (weather_code_to_string.startsWith('8')) {
        return 'thunder'
    } else {
        return 'weather'
    }
}