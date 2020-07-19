import React from 'react';
import './Left.css'

const LeftSideBar = ({chefData}) => {
  const tags = chefData.tags.map(tag => <li>{tag}</li>);
  const credentials = chefData.experience.map(credential => <li>{credential}</li>);
  const bookingRequirements = chefData.requirements.map(requirement => <li>{requirement}</li>);
  const mealIncludes = chefData.includes.map(includedItem => <li>{includedItem}</li>);
  const {reviews} = chefData;
  const findReviewAvg = () => {
    const reviewsSum = reviews.reduce((acc, review) => {
      acc += review.rating;
      return acc;
    }, 0);
    return reviewsSum / reviews.length;
  };
  const getReviews = () => {
    const reviewElems = reviews.map(review => {
      const firstName = review.name.split(' ')[0];
      const lastInit = review.name.split(' ')[1].split('')[0] + '.';
      const name = `${firstName} ${lastInit}`;
      
      return (
        <div className="chef-details">
          <h3>{name}</h3>
          <p>{review.review}</p>
        </div>
      )
    })
    return reviewElems;
  }

  return (
    <div className="left-sidebar">
      <div className="chef-details">
        <h2>{chefData.name}</h2>
        <p>{chefData.accolade}</p>
        <p>{chefData.location}</p>
        <ul>
          {tags}
        </ul>
      </div>
      <div className="chef-details">
        <h2>About the Chef</h2>
        <p>{chefData.about}</p>
      </div>
      <div className="chef-details">
        <h2>Experience</h2>
        <ul>
          {credentials}
        </ul>
      </div>
      <div className="chef-details">
        <h2>Booking Requirements</h2>
        <ul>
          {bookingRequirements}
        </ul>
      </div>
      <div className="chef-details">
        <h2>Meal Includes</h2>
        <ul>
          {mealIncludes}
        </ul>
      </div>
      <div className="chef-details">
        <h2>Ratings & Reviews</h2>
        <p>{findReviewAvg()} average</p>
        <p>{reviews.length} reviews</p>
      </div>
      {getReviews()}
      <footer className="footer">
        <div className="contact-box">
          <h3>Have questions?</h3>
          <button>Contact Intueat</button>
        </div>
        <div className="ending-info">
          <small>INTUEAT ©2020 ALL RIGHTS RESERVED</small>
          <div>
            <small>PRIVACY POLICY</small>
            <small>TERMS AND CONDITIONS</small>
          </div>

        </div>

      </footer>
    </div>
  )
}

export default LeftSideBar;