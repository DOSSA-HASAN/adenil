import React from "react";
import { Helmet } from "react-helmet-async"; // New SEO import
import member1 from "../../assets/member4.jpeg";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import logo from "../../assets/logo.jpeg";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-body">
      {/* --- SEO METADATA START --- */}
      <Helmet>
        <title>
          Adennil Foundation | Reclaiming Lives & Rebuilding Communities
        </title>
        <meta
          name="description"
          content="Adennil Foundation is dedicated to helping inmates embrace self-awareness and reintegrate into society. Founded by Elizabeth Ogallo."
        />
        <meta
          name="keywords"
          content="Adennil Foundation, Elizabeth Ogallo, Inmate Rehabilitation Kenya, Prison Reform, Counseling Psychology Kenya"
        />

        {/* Open Graph Tags (For Social Media Sharing) */}
        <meta
          property="og:title"
          content="Adennil Foundation | Reclaiming Lives"
        />
        <meta
          property="og:description"
          content="Empowering inmates to rebuild their futures and families."
        />
        <meta property="og:image" content="/new-hero.jpeg" />
        <meta property="og:url" content="https://yourdomain.com" />
        <meta property="og:type" content="website" />
      </Helmet>
      {/* --- SEO METADATA END --- */}

      {/* Floating Donate Button */}
      <div className="floating-donate">
        <Link
          to="/get-involved"
          className="donate-btn"
          aria-label="Donate to Adennil Foundation"
        >
          Donate
        </Link>
      </div>
      <button
        className="hamburger"
        onClick={() => {
          document.querySelector(".nav-links").classList.toggle("active");
        }}
        aria-label="Menu"
      ></button>

      {/* Page Container */}
      <div className="page-container">
        {/* Main Section */}
        <main className="main-content">
          <section className="hero-seection">
            <div
              className="hero-content"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.20) 70%),
                  url(${"/new-hero.jpeg"})
                `,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
              }}
            >
              <div className="hero-text">
                <h1>I believe, so do they</h1>
                <p>"We hold the mirror until he believes in the reflection" </p>
              </div>

              <div className="hero-buttons">
                <Link
                  to="/get-involved"
                  className="donate-btn"
                  aria-label="Get Involved / Donate"
                >
                  Donate
                </Link>{" "}
                <button className="btn-outline">Learn More</button>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="stats-section">
            <motion.div
              className="stat-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p>Inmates Reached</p>
              <h3>
                <CountUp end={200} duration={3} />
              </h3>
            </motion.div>

            <motion.div
              className="stat-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p>Programs Running</p>
              <h3>
                <CountUp end={4} duration={2.5} />
              </h3>
            </motion.div>

            <motion.div
              className="stat-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p>Success Rate</p>
              <h3>
                <CountUp end={85} duration={3} suffix="%" />
              </h3>
            </motion.div>
          </section>

          {/* Founder Section */}
          <section className="founder-section">
            <div className="founder-image">
              {/* Updated alt text for SEO */}
              <img
                src={member1}
                alt="Elizabeth Ogallo - Founder of Adennil Foundation"
              />
            </div>

            <div className="founder-info">
              <p className="tag">Our Founder</p>
              <div className="divider"></div>

              <h2>A Journey Sparked by an Internship</h2>
              <p>
                “Ms. Elizabeth Ogallo’s powerful revelation was born during her
                practicum in her last year of Campus as a Counselling
                psychologist major at the African Nazarene University.”
              </p>

              <blockquote className="founder-quote">
                “When we return identity to the forgotten, we don’t just rebuild
                men we rebuild communities, families, and futures.”{" "}
              </blockquote>

              <Link to="/about" className="btn-outline-secondary">
                Read Our Story
              </Link>
            </div>
          </section>

          {/* Mission / Vision / Purpose */}
          <section className="mission-section">
            <div className="mission-card">
              <span className="icon" role="img" aria-label="Mission">
                🎯
              </span>
              <h3>Our Mission</h3>
              <p>
                To help inmates embrace the idea that being locked up does not
                translate to mental stagnation.
              </p>
            </div>
            <div className="mission-card">
              <span className="icon" role="img" aria-label="Vision">
                👁️
              </span>
              <h3>Our Vision</h3>
              <p>
                To be the leading foundation in assisting inmates in knowing
                that how you view yourself determines how you will be.
              </p>
            </div>
            <div className="mission-card">
              <span className="icon" role="img" aria-label="Purpose">
                ❤️
              </span>
              <h3>Our Purpose</h3>
              <p>
                To create a base that aims at having a sense of self awareness,
                emotional intelligence and acceptance for a better tomorrow.
              </p>
            </div>
          </section>

          {/* Success Story */}
          <section className="success-section">
            <h2>Success Stories</h2>
            <p>
              Thanks to timely support, his outstanding fine was cleared on
              December 30th 2024, allowing him to regain his freedom the very
              next day...
            </p>

            <div className="carousel">
              <div className="carousel-item">
                <blockquote title="Testimonial from Program Graduate">
                  “Adennil Foundation gave me the opportunity to continue to
                  practice my career as a teacher.”
                </blockquote>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-columns">
            <div>
              <h3>Adennil Foundation</h3>
              <p>Reclaiming lives</p>
            </div>

            <div>
              <h3>Contact Us</h3>
              <ul>
                <li>+254 725 978 804</li>
                <li>@Adennilfoundation@gmail.com</li>
              </ul>
            </div>

            <div>
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/programs">Programs</Link>
                </li>
                <li>
                  <Link to="/get-involved">Get Involved</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2024 Adennil Foundation. All rights reserved.</p>
            <p className="developer-credit">
              Developed by <span>Eng. Roberto</span>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
