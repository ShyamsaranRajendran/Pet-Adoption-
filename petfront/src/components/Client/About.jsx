import React from 'react';
import Header from './Header';
import Footer from './Footer'; // Assuming you already have the Footer component
import Shape from "../assets/Shape.svg";
import Bird from "../assets/bird.png";
import Vector from "../assets/Vector.svg";
import dog_img from "../assets/Fish.png";
import teamMember1 from "../assets/member1.png"; // Replace with actual images
import teamMember2 from "../assets/member1.png";
import teamMember3 from "../assets/member1.png";

const About = () => {
  return (
    <div className="About">
      <Header />
      <div className="HomeBody">
        <div className="Homeleft">
          <img src={Shape} alt="background" className="BackGroundShape" />
          <img src={Bird} alt="" className="BackGroundBird" />
          <img src={Shape} alt="background2" className="BackGroundShape2" />
          <div className="HomeContents">
            <p className="p_color">Pet Dabang</p>

            <div className="HomeContents_h">
              <h1>A pet store with</h1>
              <h1>everything you need</h1>
            </div>
            <div className="HomeContents_p">
              <p>Sociis blandit et pellentesque aliquet at quisque tortor lacinia</p>
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

      {/* Additional Content Starts Here */}
      <div className="about-container">
        <section className="about-details">
          <h2>About our store</h2>
          <p>We offer a wide selection of products for dogs, cats, and small animals. Our goal is to provide the best for your pets.</p>
          <div className="about-stats">
            <div className="stat">
              <h3>2k+</h3>
              <p>Happy Clients</p>
            </div>
            <div className="stat">
              <h3>72</h3>
              <p>Products</p>
            </div>
            <div className="stat">
              <h3>1.8k+</h3>
              <p>Reviews</p>
            </div>
            <div className="stat">
              <h3>28</h3>
              <p>Years in Business</p>
            </div>
          </div>
        </section>

        <section className="team-section">
          <h2>Our Team</h2>
          <div className="team-members">
            <div className="team-member">
              <img src={teamMember1} alt="Caroline Washington" />
              <h3>Caroline Washington</h3>
              <p>Founder</p>
            </div>
            <div className="team-member">
              <img src={teamMember2} alt="Gerald Ferguson" />
              <h3>Gerald Ferguson</h3>
              <p>Trainer</p>
            </div>
            <div className="team-member">
              <img src={teamMember3} alt="Avery Maddox" />
              <h3>Avery Maddox</h3>
              <p>Stylist</p>
            </div>
          </div>
        </section>
      </div>
      <section className="testimonials-section">
  <h2>What people say about us</h2>
  <div className="testimonial">
    <div className="testimonial-content">
      <div className="stars">
        <span>★ ★ ★ ★ ★</span>
      </div>
      <p>
        Morbi viverra eleifend in cras orci a leo tellus. Nunc purus adipiscing diam aliquet lorem nunc. Ipsum euismod risus amet eget non. Pulvinar condimentum ultricies tellus a non pellentesque odio pellentesque blandit. Aliquet et massa eget vitae justo tellus donec ac enim. Rhoncus adipiscing cursus...
      </p>
      <h3>Gerald Ferguson</h3>
      <p className="testimonial-role">Customer</p>
    </div>
    <div className="testimonial-img">
      <div className="image-frame">
        <img src={teamMember1} alt="Gerald Ferguson" />
      </div>
    </div>
  </div>
  <div className="testimonial-controls">
    <button className="prev-btn">←</button>
    <button className="next-btn">→</button>
  </div>
</section>

      <Footer />
    </div>
  );
}

export default About