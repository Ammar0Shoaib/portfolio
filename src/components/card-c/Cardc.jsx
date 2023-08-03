import React from 'react'

import './Cardc.css';


let wml = ' Who am I ?';

let wdd = 'A Web Designer / Developer Located In Our Lovely Earth';

let para = 'Lorem ipsum dolor sit amet, consectetur otes yke manehij adipisicing elit.sit amet, Qui deserunt consequatur fugit repellendusillo voluptas?';



const Cardc = () => {
    return (
        <>
            <div className="Cardc-container">
                <h3 className='wml'>{wml}</h3>
                <span className="Cardc-container_line"></span>
                <h5 className="intro">{wdd}</h5>
                <p className="brief">{para}</p>
                <button className="btn"><i></i>Download My CV</button>
            </div>
        </>
    )
}

export default Cardc