import React, { useState, useEffect }from 'react';
import { useMediaQuery } from 'react-responsive';
import Nav from '../Nav/Nav';
import Main from '../Main/Main';
import data from '../../data';
import './App.css';
import Footer from '../Footer/Footer';


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [chefData, setChefData] = useState(data);
  const isMobile = useMediaQuery({ query: '(max-width: 800px)' });

  return (
    <div className="App">
      <Nav />
      <Main chefData={chefData} isMobile={isMobile}/>
      <Footer />
    </div>
  );
};

export default App;
