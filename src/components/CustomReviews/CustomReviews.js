import React from 'react';
import './CustomReviews.css'

const CustomReviews = (props) => {
    const { name, comment } = props.review
    return (
        <div className='custom-review-card'>
            <div>
                <h3>{name}</h3>
                <p>{comment}</p>
            </div>

        </div>
    );
};

export default CustomReviews;