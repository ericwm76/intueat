import React, { useState, useEffect }from 'react';
import Nav from '../Nav/Nav';
import Main from '../Main/Main'
import Slideshow from '../Slideshow/Slideshow';
import ChefInfo from '../ChefInfo/ChefInfo';
import data from '../../data';
import './App.css';
import Footer from '../Footer/Footer';


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [chefData, setChefData] = useState(data);
  const [isMobile, setIsMobile] = useState(false);


  return (
    <div className="App">
      <Nav />
      <Main chefData={chefData} isMobile={isMobile}/>
      <Footer />
    </div>
  );
};

export default App;
