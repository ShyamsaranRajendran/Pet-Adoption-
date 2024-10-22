import React from 'react'
import Header from './Header';
import Shape from '../assets/Shape.svg';
import Bird from '../assets/bird.png';
import Vector from '../assets/Vector.svg';
import dog_img from '../assets/dog_img.png';
import Purple from '../assets/purple.jpg';
import dog_food from '../assets/dog_food.png';
import Shape_Cat from '../assets/Shape.svg';
import Cat from '../assets/cat.png';
import { FcLike } from "react-icons/fc";
import { BiRightArrow, BiLeftArrow } from "react-icons/bi";
import { BiRightArrowAlt } from "react-icons/bi";
const Home = () => {
  return (
    <div className="Home">
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
      <div className="HomeCategories">
        <div className="topContents">
          <p>Browse by category</p>
          <div>
            <BiLeftArrow className="customeIcon" />
            <BiRightArrow className="customeIcon" />
          </div>
        </div>
        <div className="CategoryCards">
          <div className="cards">
            <img src={Purple} alt="" className="card_img" />
            <div>
              <p>Accessories</p>
              <BiRightArrowAlt className="rightArrow" />
            </div>
            <p>64 products</p>
          </div>
          <div className="cards">
            <img src={Purple} alt="" className="card_img" />
            <div>
              <p>Accessories</p>
              <BiRightArrowAlt className="rightArrow" />
            </div>
            <p>64 products</p>
          </div>{" "}
          <div className="cards">
            <img src={Purple} alt="" className="card_img" />
            <div>
              <p>Accessories</p>
              <BiRightArrowAlt className="rightArrow" />
            </div>
            <p>64 products</p>
          </div>{" "}
          <div className="cards">
            <img src={Purple} alt="" className="card_img" />
            <div>
              <p>Accessories</p>
              <BiRightArrowAlt className="rightArrow" />
            </div>
            <p>64 products</p>
          </div>
        </div>
      </div>
      <div className="featuredProducts">
        <h1>Featured products</h1>
        <div className="FeaturedProductCards">
          <div className="featuredcard">
            <img src={dog_food} alt="" />
            <div className="NameAndLike">
              <div>
                <div>Premimum Dog food</div>
                <p>$ 45</p>
              </div>
              <FcLike className="like" />
            </div>
          </div>{" "}
          <div className="featuredcard">
            <img src={dog_food} alt="" />
            <div className="NameAndLike">
              <div>
                <div>Premimum Dog food</div>
                <p>$ 45</p>
              </div>
              <FcLike className="like" />
            </div>
          </div>
          <div className="featuredcard">
            <img src={dog_food} alt="" />
            <div className="NameAndLike">
              <div>
                <div>Premimum Dog food</div>
                <p>$ 45</p>
              </div>
              <FcLike className="like" />
            </div>
          </div>
        </div>
      </div>
      <div className="CatImgContainer">
        <div className="CatLeft">
          <img src={Shape_Cat} alt="" />
          <img src={Cat} alt="" className='catImg'/>
        </div>
        <div className="CatRight">
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
      </div>
    </div>
  );
}

export default Home