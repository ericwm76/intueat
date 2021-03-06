import React from 'react';
import "./Slideshow.css"

const Slideshow = ({isMobile}) => {

  return (
    <div className="slideshow">
      <img className={isMobile ? "carousel-images-mobile" : "carousel-images-desktop"} src="https://images.unsplash.com/photo-1551645701-0e68cfc880f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80" alt="Chef Kevin" />
    </div>
  )
}

export default Slideshow;