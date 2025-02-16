import React from 'react'
import ErrorImage from '../assets/images/errorpage.svg'

const ErrorPage = () => {
  return (
    <div className='error-img' style={{width:"40rem", display: 'flex', margin: '0 auto'}}>
        <img src={ErrorImage} alt="Error Image" style={{width:'100%'}} />
    </div>
  )
}

export default ErrorPage