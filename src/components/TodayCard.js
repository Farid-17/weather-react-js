import React from 'react'
import { CONST, get_date_info, public_path } from '../helpers/general'

export default function TodayCard({ place, weather }) {
  const card = {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    boxShadow: 'rgba(50, 50, 93, 0.25) 0px 30px 60px - 12px, rgba(0, 0, 0, 0.3) 0px 18px 36px - 18px',
    borderRadius: '1.7rem',
  }, locationIcon = {
    width: '1.7rem',
    marginRight: '.4rem',
  }, todayText = {
    fontSize: '3rem',
  }, temp = {
    fontSize: '7.5rem',
  }, icon = {
    width: '80%',
  }, minMax = {
    letterSpacing: '.07rem',
    marginTop: '-2rem',
    color: CONST.mainColor,
  }, today = get_date_info()

  return (
    <div className='w-100 p-5 row align-items-center mx-0' style={card}>
      <div className='col-md-7'>
        <div className='d-flex flex-row align-items-center mb-0'>
          <img src={public_path(`img/location-white.svg`)} alt="location" style={locationIcon} />
          <span className='fs-4 fw-2 text-white'>{place}</span>
        </div>
        <p className='fw-5 text-white mb-0 text-uppercase' style={todayText}>{today._day}</p>
        <p className='fw-5 text-white mb-0 text-uppercase' style={todayText}>{`${today.day} ${today._month} ${today.year}`}</p>
        <p className='fw-bold text-white mb-2' style={temp}>{weather.temp}°C</p>
        <p className='fs-5 text-uppercase' style={minMax}>min: <span className='fw-bold'>{`${weather.temp_min}°C`}</span>, max: <span className='fw-bold'>{`${weather.temp_max}°C`}</span></p>
      </div>
      <div className='col-md-5 d-flex flex-row align-items-center justify-content-center'>
        <img src={public_path(`img/animated/${weather.icon}.svg`)} style={icon} />
      </div>
    </div>
  )
}
