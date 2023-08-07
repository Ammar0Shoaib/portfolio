import React from 'react'

import './Carda.css';


let wml = 'Who am I ?';

let wdd = 'A Web Designer / Developer Located near You !';

let para = 'Lorem ipsum dolor sit amet, consectetur otes yke manehijadipisicing elit.sit amet, Qui ittu consectetur re otes yke manehijadipisicing deserunt consequatur fugit repellendusillo voluptas?';



const Carda = () => {
    return (
        <>
            <div className="carda-container">
                <p className='carda-container-wml'>{wml}</p>
                <span className="carda-container_line"></span>
                <p className="carda-container-intro"><b>{wdd}</b></p>
                <p className="carda-container-brief">{para}</p>
                <button className="carda-container-btn"><i></i>Download My CV</button>
            </div>
        </>
    )
}

export default Carda