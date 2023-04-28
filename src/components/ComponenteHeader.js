import React from 'react'
import { Link } from 'react-router-dom';

export const ComponenteHeader = () => {
  return (
    <div className='logo'>
        <Link to={"/"}><img className='logotipo' src='uni.png'></img></Link>
    </div>
  )
}
