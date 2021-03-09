import React from 'react';

import Slider from "react-slick";
const Carousel = ({title}) => {

  
    
    return (
        <div>
        <h2> {title} </h2>
        <Slider {...settings}>
          <div>
            <h3>{title}</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
        </Slider>
      </div>
    )
}

export default Carousel
