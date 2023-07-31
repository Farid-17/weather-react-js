import React, { useEffect, useState } from 'react'
import BackgroundImage from '../components/BackgroundImage'
import Card from '../components/Card'
import { CONST, get_location_name, get_weather_card_data, get_weather_of_5_days } from '../helpers/general'
import SearchBar from '../components/SearchBar'
import TodayCard from '../components/TodayCard'

export default function HomePage() {
    // const weathers = [
    //     {
    //         key: 0,
    //         temp_min: '17',
    //         temp_max: '27',
    //         temp: '27',
    //         icon: 'day',
    //         date: '2023-29-07',
    //     },
    //     {
    //         key: 1,
    //         temp_min: '17',
    //         temp_max: '22',
    //         temp: '21',
    //         icon: 'cloudy-day-3',
    //         date: '07-30-2023',
    //     },
    //     {
    //         key: 2,
    //         temp_min: '16',
    //         temp_max: '20',
    //         temp: '19',
    //         icon: 'rainy-6',
    //         date: '07-31-2023',
    //     },
    //     {
    //         key: 3,
    //         temp_min: '16',
    //         temp_max: '22',
    //         temp: '20',
    //         icon: 'rainy-1',
    //         date: '08-01-2023',
    //     },
    //     {
    //         key: 4,
    //         temp_min: '-5',
    //         temp_max: '2',
    //         temp: '-2',
    //         icon: 'snowy-4',
    //         date: '08-02-2023',
    //     },
    // ]

    const [weathers, setWeathers] = useState([])
    const [placeName, setPlaceName] = useState('New york')

    const get_weather_of_search = () => {
        get_weather_of_5_days(response => {
            setWeathers(get_weather_card_data(response.data.timelines.daily))
        }, placeName)
    }

    useEffect(() => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const { latitude, longitude } = position.coords;
                    try {
                        // Use a reverse geocoding API to get the place name based on latitude and longitude
                        const response = await fetch(
                            `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
                        );
                        const data = await response.json();
                        setPlaceName(data.display_name);
                        get_weather_of_5_days(response => {
                            setWeathers(get_weather_card_data(response.data.timelines.daily))
                        }, placeName)
                    } catch (error) {
                        console.error('Error fetching place name:', error);
                    }
                },
                (error) => {
                    console.error('Error getting user location:', error);
                }
            );
        } else {
            console.error('Geolocation is not available in this browser.');
        }
    }, [])

    return (
        <div className='w-100 vh-100'>
            <BackgroundImage>
                <div className='fs-1 fw-bold py-4'>WEATHER <span style={{ color: CONST.mainColor }}>FORECAST</span></div>

                <div className='mb-4'>
                    <SearchBar setPlaceName={setPlaceName} action={get_weather_of_search} />
                </div>

                <div className='mb-2'>
                    <TodayCard weather={weathers.length > 0 ? weathers[0] : {}} place={placeName} />
                </div>

                <div className='row' style={{ boxShadow: 'rgba(17, 12, 46, 0.15) 0px 48px 100px 0px' }}>
                    {
                        weathers.map((weather, index) => {
                            if (index > 0 && index < 5) {
                                return (<Card temp={weather.temp} icon={weather.icon} date={weather.date} key={weather.key} />)
                            }
                        })
                    }
                </div>
            </BackgroundImage>
        </div>
    )
}
