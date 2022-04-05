import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Rating from 'react-rating';
import './Ratings.css'

const Ratings = () => {
    return (
        <div className='user-rating'>
            Ratings: <Rating
                initialRating={4.5}
                emptySymbol={<FontAwesomeIcon icon={faStar} />}
                fullSymbol={<FontAwesomeIcon style={{ color: 'goldenrod' }} icon={faStar} />}
                readonly
            ></Rating>
        </div>
    );
};

export default Ratings;