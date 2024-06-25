import React from "react";
import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <section className="hero">
      <img src="/restaurant.jpg" alt="restaurant" />
      <div className="item">
        <h3>Dream Planner</h3>
        <div>
          <h1>Your Personal Dream Planner for all your needs</h1>
          <p>
          EventPlanner360 is an all-in-one event management platform enabling users to plan, organize, and oversee diverse events like conferences, weddings, and parties.
          </p>
          <Link to="contact" spy={true} smooth={true} duration={500}>
            BOOK NOW
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;