import React from 'react';
import './Left.css'

const LeftSideBar = (props) => {
  const {chefData} = props;
const credentials = chefData.experience.map(credential => <li>{credential}</li>)
  
  return (
    <div className="left-sidebar">
      <div className="chef-details">
        <h2>{chefData.name}</h2>
        <p>{chefData.accolade}</p>
        <p>{chefData.location}</p>
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
    </div>
  )
}

export default LeftSideBar;