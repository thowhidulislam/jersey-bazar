import React from 'react';
import Ratings from '../Ratings/Ratings';
import './CustomReviews.css'

const CustomReviews = (props) => {
    const { name, comment, picture } = props.review
    return (
        <div className='custom-review-card'>
            <div className=''>
                <Ratings></Ratings>
                <p className='user-reviews'>{comment}</p>
                <div className='user-info-container'>
                    <img className='user-photo' src={picture} alt="" />
                    <h3>{name}</h3>
                </div>
            </div>

        </div>
    );
};

export default CustomReviews;