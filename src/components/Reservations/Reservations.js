import React, {useState} from 'react';
import './Reservations.css';

const Reservations = ({chefData}) => {
  const [count, setCount] = useState(0)
  const {reviews} = chefData;
  const findReviewAvg = () => {
    const reviewsSum = reviews.reduce((acc, review) => {
      acc += review.rating;
      return acc;
    }, 0);
    return reviewsSum / reviews.length;
  };

  return (
    <div className="reservations-card">
      <div className="resy-header">
        <p className="price-per-person"><span className="price">${chefData.pricePerPerson}</span> per person</p>
        <div className="reviews">
          <img className="large-star" src={require("../../assets/star.png")} alt="Orange star"/>
          <h2 className="review-avg">{findReviewAvg()}</h2>
        </div>
      </div>
      <div className="resy-inputs">
        <div className="resy-input">
          <p className="resy-input-label" for="date-input">DATE</p>
          <input type="date"/>
        </div>
        <div className="resy-input">
          <p className="resy-input-label" for="address-input">Location</p>
          <input type="text"/>
        </div>
        <div className="resy-input">
          <div className="counter">
            <p>Headcount</p>
            <div className="counter-btns">
              <button className="counter-btn">-</button>
              <p>{count}</p>
              <button className="counter-btn">+</button>
            </div>
          </div>
        </div>
      </div>
      <button className="reserve-btn">Reserve and Pay Deposit</button>
      <p className="terms-and-conds-text">By continuing you agree to our <a>Terms & Conditions</a></p>
    </div>
  )
}

export default Reservations;