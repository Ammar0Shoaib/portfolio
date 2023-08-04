import React from 'react'

import './Cardc.css';

import digimar from './cardc-img/digimar.PNG';

import uxui from './cardc-img/uxui.PNG';

import webdpl from './cardc-img/webdpl.PNG';

const mexp = 'My Expertise';









// const wdd = 'A Web Designer / Developer Located In Our Lovely Earth';

// const para = 'Lorem ipsum dolor sit amet, consectetur otes yke manehij adipisicing elit.sit amet, Qui deserunt consequatur fugit repellendusillo voluptas?';





const Cardc = () => {
    return (
        <>
            <div className="Cardc-container">


                <h3 className='wml'>{mexp}</h3>

                <span className="Cardc-container_line"></span>


                <div className="grid_container">


                    <div className="image-column">
                        <img className='img1' src={digimar} alt="UX-UI-design" />
                        <img className='img2' src={uxui} alt="UX-UI-design" />
                        <img className='img3' src={webdpl} alt="web-development" />
                    </div>

                    <div className="text-column">
                        <div className="text1">
                            <p><b>UX Design</b><br />exercitat Repellendus, corrupt.</p>
                        </div>
                        <div className="text2">
                            <p><b>Web Development</b><br />Lorem ipsum dolor sit consectetur.</p>
                        </div>
                        <div className="text3">
                            <p><b>Digital Marketing</b><br />voluptate commodi illo voluptatib.</p>
                        </div>
                    </div>


                </div>

            </div>
        </>
    )
}

export default Cardc





