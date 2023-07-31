import React from 'react'
import { CONST, get_card_date, public_path } from '../helpers/general'

export default function Card({ temp, date, icon }) {
    const style = {
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        borderRadius: '1.7rem',
    }, header = {
        backgroundColor: CONST.mainColor,
    }

    let dates = get_card_date(date.substring(0, 10));
    console.log('====================================');
    console.log(dates, date.substring(0, 10));
    console.log('====================================');

    return (
        <div className='col-md-3 p-3'>
            <div className='py-2 mb-3 text-white rounded' style={header}>
                <p className='m-0 text-center'>{dates.day}</p>
            </div>

            <div className='d-flex flex-column align-items-center' style={style}>
                <img src={public_path(`img/animated/${icon}.svg`)} className='w-100' />
                <hr className='w-75' />
                <div className='pb-5'>
                    <p className='m-0 fs-1 fw-bold text-white text-center'>{`${temp}°C`}</p>
                    <p className='m-0 fs-4 text-white text-center'>{dates.dt}</p>
                </div>
            </div>
        </div>
    )
}
