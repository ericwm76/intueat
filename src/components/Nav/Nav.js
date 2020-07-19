import React from 'react';
import './Nav.css';

const Nav = () => {


  return (
    <div className="nav">
      <img className="logo" src={require("../../assets/logo.png")} alt="Intueat logo"/>
      <div className="signin-btns">
        <button>Sign In</button>
        <button>Create Account</button>
      </div>
    </div>
  )
}

export default Nav;