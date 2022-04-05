import React from 'react';
import useReviews from '../../hooks/useReviews/useReviews';
import ReviewsCard from '../ReviewsCard/ReviewsCard';
import './ReviewsPage.css'

const ReviewsPage = () => {
    const [reviews, setReviews] = useReviews()
    return (
        <div className='reviews-page'>
            {
                reviews.map(review => <ReviewsCard
                    key={review._id}
                    review={review}
                ></ReviewsCard>)
            }
        </div>
    );
};

export default ReviewsPage;