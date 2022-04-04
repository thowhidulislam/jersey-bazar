import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <div className='banner-section'>
            <div className='banner-details'>
                <h1>
                    <span>Buy Football Clubs</span><br />
                    <span><span className='banner-title-color'>Jersey's</span> Online.</span></h1>
                <p>Jersey bazar specialises in selling football clubs jerseys and accessories online, offering competitive prices and excellent customer service! </p>
            </div>
            <div className='banner-image'>
                <img src="images\Real-Madrid-Home-Jersey-2021-22.jpg" alt="" />
            </div>
        </div>
    );
};

export default Home;