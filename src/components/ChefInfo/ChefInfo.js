import React from 'react';
import './ChefInfo.css'

const ChefInfo = ({chefData}) => {
  const tags = chefData.tags.map(tag => <li className="tag">{tag}</li>);
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
    <div className="chef-info">
      <div className="chef-details">
        <h1>{chefData.name}</h1>
        <p>{chefData.accolade} • {chefData.location}</p>
        <ul className="tags-container">
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
        <div className="reviews">
          <img className="large-star" src={require("../../assets/star.png")} alt="Orange star"/>
          <h1>{findReviewAvg()}</h1>
          <p>{reviews.length} reviews</p>
        </div>
      </div>
      {getReviews()}
    </div>
  )
}

export default ChefInfo;