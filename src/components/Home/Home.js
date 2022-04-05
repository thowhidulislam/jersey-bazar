import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../hooks/useReviews/useReviews';
import CustomReviews from '../CustomReviews/CustomReviews';
import './Home.css'

const Home = () => {
    const [reviews, setReviews] = useReviews()
    const reviewsLimited = reviews.slice(-3)
    return (
        <section>
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
            <div className='custom-reviews-section'>
                <h2>Custom Reviews({reviews.length})</h2>
                <div className='custom-reviews-container'>

                    {
                        reviewsLimited.map(review => <CustomReviews
                            key={review._id}
                            review={review}
                        ></CustomReviews>)
                    }
                </div>
                <Link to='/reviews'><button className='reviews-button'>See All Reviews</button></Link>
            </div>
        </section>
    );
};

export default Home;