import React from 'react'

import './Repart3.css'

import StatusBar from './StatusBar.jsx';


const Repart3 = () => {



    const statusBarData = [
        { parameterName: 'hTL5 & CSS3', percentage: 95 },
        { parameterName: 'JavaScript', percentage: 80 },
        { parameterName: 'PHP', percentage: 80 },
        { parameterName: 'SQL', percentage: 70 },
        { parameterName: 'English', percentage: 87 },
        { parameterName: 'Freanch', percentage: 75 },
        { parameterName: 'Spanish', percentage: 78 },
        // Add more parameters as needed
    ];






    return (

        <div className='repart3_main-container'>

            <div className="repart3_main-sub-container">

                <div className="repart3_main-sub-container-para">
                    <p className='repart3_main-container-mainheading'>Skills</p>
                </div>



                <div className="repart3_main-container-span">
                    <span className='repart3_main-container-span-element'></span>
                </div>




            </div>



            <div className='skill_set-container'>

                {statusBarData.map((data, index) => (


                    <div key={index}>


                        <div className="status_container-heading-statusbar">

                            <div className="status_container-heading">

                                <p className='statusBar-heaading'>{data.parameterName}</p>

                            </div>

                            <div className="status_container-statusbar">

                                <StatusBar percentage={data.percentage} parameterName={data.parameterName} />

                            </div>


                        </div>

                    </div>


                ))}








            </div>









        </div>






    )
}

export default Repart3