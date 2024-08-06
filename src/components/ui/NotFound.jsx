import React from 'react'
import { Link } from 'react-router-dom'
import Title from './Title'

function NotFound() {
  return (
    <div className='not-found'>
        <Title/>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/home">Go to Home</Link>
    </div>
  )
}

export default NotFound