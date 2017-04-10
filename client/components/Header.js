import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='jumbotron' id='header-img'>
      <Link className='no-text-decoration' to='/'><h2 className='text-center header-text'>BeanGo</h2></Link>
    </div>
  )
}

export default Header
