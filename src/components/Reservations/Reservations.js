import React, {useState} from 'react';
import ReviewAvg from '../ReviewAvg/ReviewAvg';
import './Reservations.css';

const Reservations = ({chefData, isMobile}) => {
  const [count, setCount] = useState(0);
  const selectCardStyle = () => {
    if (isMobile) {
      return (
        <div className="reservations-card reservations-card-mobile">
          <div className="resy-header">
            <p className="price-per-person"><span className="price">${chefData.pricePerPerson}</span> per person</p>
            <ReviewAvg reviews={chefData.reviews} />
          <button className="reserve-btn">Reserve and Pay Deposit</button>
          </div>
        </div>
      )
    } else {
      return (
        <div className="reservations-card">
          <div className="resy-header">
            <p className="price-per-person"><span className="price">${chefData.pricePerPerson}</span> per person</p>
            <ReviewAvg reviews={chefData.reviews} />
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
  }

  return (
    selectCardStyle()
  )
}

export default Reservations;