import React from 'react'

import './Tabbar.css';

const Tabbar = () => {
  return (
    <>
    <div className='tab-bar'>

        <div className="tab_bar-one">

            <h3 className='tab_bar-one-h3'>Home</h3>
            <h3 className='tab_bar-one-h3'>About</h3>
            <h3 className='tab_bar-one-h3'>Resume</h3>

        </div>


        <div className="tab_bar-two">

            <h3 className='tab_bar-two-h3'>Portfolio</h3>
            <h3 className='tab_bar-two-h3'>Blog</h3>
            <h3 className='tab_bar-two-h3'>Contact</h3>

        </div>

    </div>
</>
  )
}

export default Tabbar