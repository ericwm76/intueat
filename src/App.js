import React, { useState }from 'react';
import Nav from './components/Nav/Nav'
import Slideshow from './components/Slideshow/Slideshow'
import LeftSideBar from './components/Left/Left'
import data from './data'
import './App.css';


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [chefData, setChefData] = useState(data)

  return (
    <div className="App">
      <Nav />
      <Slideshow />
      <LeftSideBar chefData={chefData}/>
    </div>
  );
}

export default App;
