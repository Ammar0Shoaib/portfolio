import React from 'react'

import './Carda.css';


let wml = 'Who am I ?';

let wdd = 'A Web Designer / Developer Located In the Earth';

let para = 'Lorem ipsum dolor sit amet, consectetur otes yke manehijadipisicing elit.sit amet, Qui consectetur otes yke manehijadipisicing deserunt consequatur fugit repellendusillo voluptas?';



const Carda = () => {
    return (
        <>
            <div className="carda-container">
                <p className='wml'>{wml}</p>
                <span className="carda-container_line"></span>
                <p className="intro"><b>{wdd}</b></p>
                <p className="brief">{para}</p>
                <button className="btn"><i></i>Download My CV</button>
            </div>
        </>
    )
}

export default Carda