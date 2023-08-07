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


                <h3 className='Cardc-container-wml'>{mexp}</h3>

                <span className="Cardc-container_line"></span>


                <div className="cardc-grid_container">


                    <div className="cardc-image-column">
                        <img className='cardc-image-column-img1' src={digimar} alt="UX-UI-design" />
                        <img className='cardc-image-column-img2' src={uxui} alt="UX-UI-design" />
                        <img className='cardc-image-column-img3' src={webdpl} alt="web-development" />
                    </div>

                    <div className="cardc-text-column">
                        <div className="cardc-text-column-text1">
                            <p className='cardc-text-column-text1-para'><span className='heading-weight'>UX Design</span><br />exercitat Repellendus, corrupt.</p>
                        </div>
                        <div className="cardc-text-column-text2">
                        <p className='cardc-text-column-text2-para'><span className='heading-weight'>UX Design</span><br />exercitat Repellendus, corrupt.</p>
                        </div>
                        <div className="cardc-text-column-text3">
                        <p className='cardc-text-column-text3-para'><span className='heading-weight'>UX Design</span><br />exercitat Repellendus, corrupt.</p>
                        </div>
                        
                    </div>


                </div>

            </div>
        </>
    )
}

export default Cardc





