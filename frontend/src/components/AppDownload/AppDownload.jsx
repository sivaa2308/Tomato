import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'
const AppDownload = () => {
  return (
    <div className='AppDownload' id='AppDownload'>
        <p>Fo Better Expieriance Download<br />
        Tomato App</p>
        <div className="AppDownload-platforms">
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
        </div>
      
    </div>
  )
}

export default AppDownload
