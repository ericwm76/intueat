import React from 'react';
import './Left.css'

const LeftSideBar = ({chefData}) => {
  const tags = chefData.tags.map(tag => <li>{tag}</li>);
  const credentials = chefData.experience.map(credential => <li>{credential}</li>);
  const bookingRequirements = chefData.requirements.map(requirement => <li>{requirement}</li>);
  const mealIncludes = chefData.includes.map(includedItem => <li>{includedItem}</li>);
  const {reviews} = chefData;
  const reviewAvg = () => {
    const reviewsSum = reviews.reduce((acc, review) => {
      acc += review.rating;
      console.log(acc)
      return acc
    }, 0);
    return reviewsSum / reviews.length;
  };

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
        <p>{reviewAvg()}</p>
        <p>{reviews.length}</p>
      </div>
    </div>
  )
}

export default LeftSideBar;