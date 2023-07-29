import React, { useEffect, useState } from 'react'
import BackgroundImage from '../components/BackgroundImage'
import Card from '../components/Card'
import { CONST, get_weather_card_data, get_weather_of_5_days } from '../helpers/general'
import SearchBar from '../components/SearchBar'
import TodayCard from '../components/TodayCard'

export default function HomePage() {
    const weathers = [
        {
            key: 0,
            temp: '27',
            icon: 'day',
            date: '07-29-2023',
        },
        {
            key: 1,
            temp: '21',
            icon: 'cloudy-day-3',
            date: '07-30-2023',
        },
        {
            key: 2,
            temp: '19',
            icon: 'rainy-6',
            date: '07-31-2023',
        },
        {
            key: 3,
            temp: '20',
            icon: 'rainy-1',
            date: '08-01-2023',
        },
    ]

    // const [weathers, setWeathers] = useState([])

    // useEffect(() => {
    //     get_weather_of_5_days(response => {
    //         setWeathers(get_weather_card_data(response.data.timelines.daily))
    //     })
    // }, [])

    return (
        <div className='w-100 vh-100'>
            <BackgroundImage>
                <div className='fs-1 fw-bold py-4'>WEATHER <span style={{ color: CONST.mainColor }}>FORECAST</span></div>

                <div className='mb-4'>
                    <SearchBar />
                </div>

                <div className='mb-4'>
                    <TodayCard />
                </div>

                <div className='row' style={{ boxShadow: 'rgba(17, 12, 46, 0.15) 0px 48px 100px 0px' }}>
                    {
                        weathers.map(weather => {
                            return (<Card temp={weather.temp} icon={weather.icon} date={weather.date} key={weather.key} />)
                        })
                    }
                </div>
            </BackgroundImage>
        </div>
    )
}
