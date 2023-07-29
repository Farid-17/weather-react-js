import React from 'react'
import BackgroundImage from '../components/BackgroundImage'
import Card from '../components/Card'
import { CONST } from '../helpers/general'

export default function HomePage() {
    const weathers = [
        {
            temp: '27',
            icon: 'day',
            date: '07-29-2023',
        },
        {
            temp: '21',
            icon: 'cloudy-day-1',
            date: '07-30-2023',
        },
        {
            temp: '19',
            icon: 'rainy-6',
            date: '07-31-2023',
        },
        {
            temp: '20',
            icon: 'rainy-1',
            date: '08-01-2023',
        },
    ]

    return (
        <div className='w-100 vh-100'>
            <BackgroundImage>
                <div className='fs-1 fw-bold py-4'>WEATHER <span style={{ color: CONST.mainColor }}>FORECAST</span></div>
                <div className='row'>
                    {
                        weathers.map(weather => {
                            return (<Card temp={weather.temp} icon={weather.icon} date={weather.date} />)
                        })
                    }
                </div>
            </BackgroundImage>
        </div>
    )
}
