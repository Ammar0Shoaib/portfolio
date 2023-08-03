import React from 'react'
import './Herobanner.css';


import facebook from './banner-images/facebook.png';
import google from './banner-images/google.png';
import instagram from './banner-images/instagram.png';
import twitter from './banner-images/twitter.png';
import github from './banner-images/github.png';
import imageUrl from './banner-images/printer.png';

const  strname = 'Linux Mint' ;

const strexpt1 = 'Frontend Designer';
const strexpt2 = 'Developer';




const Herobanner = () => {
    return (
        <>
            <div className="container">



                <div className='social-icons'>

                    <div className='social-images'>
                        <div className="facebook">
                            <img src={facebook} alt="facebook" />
                        </div>
                        <div className="google">
                            <img src={google} alt="google" />
                        </div>
                        <div className="instagram">
                            <img src={instagram} alt="instagram" />
                        </div>
                        <div className="twitter">
                            <img src={twitter} alt="twitter" />
                        </div>
                        <div className="github">
                            <img src={github} alt="twitter" />
                        </div>
                    </div>

                </div>

                <section className='introduction'>

                    <p>Hello, I am </p>
                    <h1>{strname}</h1>
                    <h3>{strexpt1} &nbsp;  &#10072; &nbsp; {strexpt2}</h3>

                    <div className="btncontainer">
                        <button className="button-with-image">
                            <img src={imageUrl} alt="Icon" />
                            <span className="button-text">Print Resume</span>
                        </button>
                    </div>


                </section>


            </div>


        </>
    )
}

export default Herobanner