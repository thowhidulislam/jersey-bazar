import React from 'react';

const ReviewsCard = (props) => {
    const { name, comment } = props.review
    return (
        <div>
            <h3>{name}</h3>
            <p>{comment}</p>
        </div>
    );
};

export default ReviewsCard;