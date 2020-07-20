import React from 'react';
import Slideshow from '../Slideshow/Slideshow';
import ChefInfo from '../ChefInfo/ChefInfo';
import Reservations from '../Reservations/Reservations'
import './Main.css';

const Main = ({chefData, isMobile}) => {

  return (
    <main className={isMobile ? "main-mobile" : "main-desktop"}>
      <Slideshow />
      <ChefInfo chefData={chefData} />
      <Reservations chefData={chefData}/>
    </main>
  )
}

export default Main;