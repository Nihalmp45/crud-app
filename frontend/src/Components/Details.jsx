import React from 'react'
import { Link } from 'react-router-dom'
import './Details.css'

const Details = () => {
  return (
    <>
      <Link to="/Sign-up" className='link'>Sign up</Link>
      <h2 className='header-list'>List of Employees :</h2>
    </>
  )
}

export default Details