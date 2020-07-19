import React, { useState, useEffect }from 'react';
import Nav from '../Nav/Nav';
import Slideshow from '../Slideshow/Slideshow';
import LeftSideBar from '../ChefInfo/ChefInfo';
import data from '../../data';
import './App.css';


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [chefData, setChefData] = useState(data);
  const [isMobile, setIsMobile] = useState(false);


  return (
    <div className="App">
      <Nav />
      <Slideshow />
      <LeftSideBar chefData={chefData}/>
    </div>
  );
};

export default App;
