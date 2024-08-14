import React from "react";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div>
      <div class="about-container">
        <header class="about-header">
          <h1 class="about-title">About Us</h1>
        </header>
        <section class="about-content">
          <h2 class="about-subtitle">Our Mission</h2>
          <p class="about-text">
            At [Your Store Name], our mission is to provide you with the best
            products at the best prices. We believe in quality, customer
            satisfaction, and convenience.
          </p>

          <h2 class="about-subtitle">Who We Are</h2>
          <p class="about-text">
            Founded in [Year], we are a team of passionate individuals dedicated
            to bringing you the best online shopping experience. We carefully
            select our products and work closely with suppliers to ensure that
            we offer only the highest quality items.
          </p>

          <h2 class="about-subtitle">Why Choose Us?</h2>
          <p class="about-text">
            - High-quality products
            <br />
            - Excellent customer service
            <br />
            - Fast and reliable shipping
            <br />- Easy returns and exchanges
          </p>

          <h2 class="about-subtitle">Contact Us</h2>
          <p class="about-text">
            Have questions? Feel free to reach out to our support team at
            [support@yourstore.com]. We’re here to help!
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
