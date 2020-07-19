import React from 'react'
import './Nav.css'

const Nav = () => {


  return (
    <div className="nav">
      <img src="../../logo.png" alt="Intueat logo"/>
      <div className="signin-btns">
        <button>Sign In</button>
        <button>Create Account</button>
      </div>
    </div>
  )
}

export default Nav;