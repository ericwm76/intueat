import React from 'react';
import './ReviewAvg.css';

const ReviewAvg = ({reviews}) => {
  const findReviewAvg = () => {
    const reviewsSum = reviews.reduce((acc, review) => {
      acc += review.rating;
      return acc;
    }, 0);
    return reviewsSum / reviews.length;
  };
  
  return (
    <div className="review-avg">
      <img className="large-star" src={require("../../assets/star.png")} alt="Orange star"/>
      <p className="review-avg-num">{findReviewAvg()}</p>
    </div>
  );
}

export default ReviewAvg;