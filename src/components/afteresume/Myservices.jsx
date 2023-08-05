import React from 'react'

import './Myservices.css';

import imga from './afteresume-imges/img-a.PNG'
import imgb from './afteresume-imges/img-b.PNG'
import imgc from './afteresume-imges/img-c.PNG'
import imgd from './afteresume-imges/img-d.PNG'
import imge from './afteresume-imges/img-e.PNG'
import imgf from './afteresume-imges/img-f.PNG'


const Myservices = () => {
    return (

        <div className='myservices_main-container'>



            <div className="myservices_main-sub-container">

                <div className="myservices_main-sub-container-text">

                    <div className='myservices_main-sub-container-text-must'>
                        <p className='myservices_main-sub-container-text-must-para'> <span className='services'>My</span> Services</p>
                    </div>
                </div>


                <div className="myservices_main-sub-container-span">

                    <div className="myservices_main-sub-container-span-div">
                        <span className='myservices_main-sub-container-span-div-must'></span>
                    </div>

                </div>

            </div>




            <div className="myservices_main-container-last-half-main">





                <div className="myservices_main-container-last-half-main-sub1">




                    <div className="myservices_main-container-last-half-main-sub-article">


                        <div className="heading-img">
                            <img className='article-img' src={imga} alt="img-a" />
                            <p className="heading">Ullam</p>
                        </div>


                        <div className="description">
                            <p className="para">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam commodi provident, dolores reiciendis enim pariatur error optio, tempora ex, nihil nesciunt! In praesentium sunt commodi, unde ipsam ex veritatis laboriosam dolor asperiores suscipit blanditiis, dignissimos quos nesciunt nulla aperiam officia.</p>
                        </div>

                    </div>





                    <div className="myservices_main-container-last-half-main-sub-article">

                        <div className="heading-img">
                            <img className='article-img' src={imgb} alt="img-b" />
                            <p className="heading">Asperiores</p>
                        </div>


                        <div className="description">
                            <p className="para">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam commodi provident, dolores reiciendis enim pariatur error optio, tempora ex, nihil nesciunt! In praesentium sunt commodi, unde ipsam ex veritatis laboriosam dolor asperiores suscipit blanditiis, dignissimos quos nesciunt nulla aperiam officia.</p>
                        </div>

                    </div>


                    <div className="myservices_main-container-last-half-main-sub-article">

                        <div className="heading-img">
                            <img className='article-img' src={imgc} alt="img-c" />
                            <p className="heading">Tempora</p>
                        </div>


                        <div className="description">
                            <p className="para">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam commodi provident, dolores reiciendis enim pariatur error optio, tempora ex, nihil nesciunt! In praesentium sunt commodi, unde ipsam ex veritatis laboriosam dolor asperiores suscipit blanditiis, dignissimos quos nesciunt nulla aperiam officia.</p>
                        </div>

                    </div>



                </div>






                <div className="myservices_main-container-last-half-main-sub2">




                    <div className="myservices_main-container-last-half-main-sub-article">


                        <div className="heading-img">
                            <img className='article-img' src={imgd} alt="img-d" />
                            <p className="heading">Provident</p>
                        </div>

                        <div className="description">
                            <p className="para">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam commodi provident, dolores reiciendis enim pariatur error optio, tempora ex, nihil nesciunt! In praesentium sunt commodi, unde ipsam ex veritatis laboriosam dolor asperiores suscipit blanditiis, dignissimos quos nesciunt nulla aperiam officia.</p>
                        </div>

                    </div>


                    <div className="myservices_main-container-last-half-main-sub-article">


                        <div className="heading-img">
                            <img className='article-img' src={imge} alt="img-e" />
                            <p className="heading">Consecteture</p>
                        </div>

                        <div className="description">
                            <p className="para">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam commodi provident, dolores reiciendis enim pariatur error optio, tempora ex, nihil nesciunt! In praesentium sunt commodi, unde ipsam ex veritatis laboriosam dolor asperiores suscipit blanditiis, dignissimos quos nesciunt nulla aperiam officia.</p>
                        </div>

                    </div>


                    <div className="myservices_main-container-last-half-main-sub-article">

                        <div className="heading-img">
                            <img className='article-img' src={imgf} alt="img-f" />
                            <p className="heading">Veritatis</p>
                        </div>


                        <div className="description">
                            <p className="para">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam commodi provident, dolores reiciendis enim pariatur error optio, tempora ex, nihil nesciunt! In praesentium sunt commodi, unde ipsam ex veritatis laboriosam dolor asperiores suscipit blanditiis, dignissimos quos nesciunt nulla aperiam officia.</p>
                        </div>

                    </div>






                </div>





            </div>


        </div>










    )
}

export default Myservices