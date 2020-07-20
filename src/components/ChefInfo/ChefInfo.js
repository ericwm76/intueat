import React from 'react';
import ReviewAvg from '../ReviewAvg/ReviewAvg';
import './ChefInfo.css';

const ChefInfo = ({chefData, isMobile}) => {
  const tags = chefData.tags.map(tag => <li className="tag">{tag}</li>);
  const credentials = chefData.experience.map(credential => <li>{credential}</li>);
  const bookingRequirements = chefData.requirements.map(requirement => <li>{requirement}</li>);
  const mealIncludes = chefData.includes.map(includedItem => <li>{includedItem}</li>);
  const {reviews} = chefData;
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
    <div className={isMobile?"chef-info chef-info-mobile":"chef-info"}>
      <div className="chef-details">
        <div className="chef-title">
          <h1 className={isMobile && "chef-name-mobile"}>{chefData.name}</h1>
          {isMobile && <ReviewAvg reviews={reviews} />}
        </div>
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
          <ReviewAvg reviews={reviews} />
          <p>{reviews.length} reviews</p>
        </div>
      </div>
      {getReviews()}
    </div>
  )
}

export default ChefInfo;