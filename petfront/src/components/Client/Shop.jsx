import React from 'react'
import Header from './Header';
import Shape from "../assets/Shape.svg";
import Bird from "../assets/bird.png";
import Vector from "../assets/Vector.svg";
import dog_img from "../assets/dog_img.png";
const Shop = () => {
  return (
    <div className="Shop">
      <Header />
      <div className="HomeBody">
        <div className="Homeleft">
          <img src={Shape} alt="background" className="BackGroundShape" />
          <img src={Bird} alt="" className="BackGroundBird" />
          <img src={Shape} alt="background2" className="BackGroundShape2" />
          <div className="HomeContents">
            <p className="p_color">Pet Dabang</p>

            <div className="HomeContents_h">
              <h1>A pet store with </h1>
              <h1>everything you need</h1>
            </div>
            <div className="HomeContents_p">
              <p>
                Sociis blandit et pellentesque aliquet at quisque tortor lacinia
              </p>
              <p>nullam. Mattis aenean scelerisque dui libero</p>
            </div>
            <button className="Adopt-btn">Shop Now</button>
          </div>
        </div>
        <div className="HomeRight">
          <img src={Vector} alt="" className="BackGround" />
          <img src={dog_img} alt="" className="DogImg" />
        </div>
      </div>
    </div>
  );
}

export default Shop