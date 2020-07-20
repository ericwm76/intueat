import React from 'react';
import './Nav.css';

const Nav = () => {


  return (
    <div className="nav">
      <img className="logo" src={require("../../assets/logo.png")} alt="Intueat logo"/>
      <div className="signin-btns">
        <button className="sign-in">Sign In</button>
        <button className="create-account">Create Account</button>
      </div>
    </div>
  )
}

export default Nav;