import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async"; // New SEO import

import "./ProgramsImpact.css";
import logo from "../../assets/logo.jpeg";

const Programs = () => {
  return (
    <>
      {/* --- SEO METADATA START --- */}
      <Helmet>
        <title>
          Our Programs | Adennil Foundation - Rehabilitation & Re-integration
        </title>
        <meta
          name="description"
          content="Explore Adennil Foundation's core programs: Cognitive Restructuring, Social Code of Manhood, and the Man Rebuilt Prison Ministry. Reducing recidivism in Kenya."
        />
        <meta
          name="keywords"
          content="prison programs Kenya, cognitive restructuring, inmate rehabilitation, recidivism reduction, prison ministry Nairobi, skill building for inmates"
        />

        {/* Social Media Tags */}
        <meta
          property="og:title"
          content="Rehabilitation Programs | Adennil Foundation"
        />
        <meta
          property="og:description"
          content="Measurable change through cognitive restructuring and social re-integration."
        />
        <meta property="og:image" content="/cognitive.jpeg" />
      </Helmet>
      {/* --- SEO METADATA END --- */}

      <div className="page-container">
        <main className="main-contents">
          <div className="content-wrapper">
            {/* Hero Section */}
            <section
              className="hero-section"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.6) 100%), url("./cognitive.jpeg")`,
              }}
              aria-label="Hero background showing rehabilitation journey"
            >
              <div className="hero-text">
                <h1 className="hero-title">
                  Building New Futures: From Incarceration <br />
                  to re-integration
                </h1>
                <p className="hero-subtitle">
                  "Serving as a foundational mirror, we actively assist
                  incarcerated men in seeing past their past actions to
                  rediscover their inherent identity and dignity."
                </p>
              </div>
            </section>

            {/* Programs Section */}
            <section className="programs-section">
              <div className="section-header">
                <h2 className="section-title">Our Programs</h2>
                <p className="section-desc">
                  The journey of reclamation requires a fundamental shift in
                  perception. Our integrated program suite includes:
                </p>
              </div>

              <div className="programs-grid">
                {/* Program 1 */}
                <div className="program-card">
                  <span className="material-symbols-outlined icon-large icon-primary">
                    construction
                  </span>
                  <div>
                    <h3 className="card-title">1. Cognitive Restructuring</h3>
                    <p className="card-desc">
                      Targeting the cost/benefit analysis of maintaining an old,
                      criminal identity versus embracing a new, dignified
                      identity.
                    </p>
                  </div>
                </div>

                {/* Program 2 */}
                <div className="program-card">
                  <span className="material-symbols-outlined icon-large icon-primary">
                    psychology
                  </span>
                  <div>
                    <h3 className="card-title">
                      2. The Social Code of Manhood
                    </h3>
                    <p className="card-desc">
                      Using peer interaction and social norms to make a
                      pro-social identity the rational choice within the
                      correctional environment.
                    </p>
                  </div>
                </div>

                {/* Program 3 */}
                <div className="program-card">
                  <span className="material-symbols-outlined icon-large icon-primary">
                    handshake
                  </span>
                  <div>
                    <h3 className="card-title">3. Skill-to-Self Worth</h3>
                    <p className="card-desc">
                      Linking tangible skills acquisition to internal
                      self-worth, ensuring the utility of a new identity is
                      concrete.
                    </p>
                  </div>
                </div>

                {/* Program 4 */}
                <div className="program-card">
                  <span className="material-symbols-outlined icon-large icon-primary">
                    rebase_edit
                  </span>
                  <div>
                    <h3 className="card-title">
                      4. The "Man Rebuilt" Ministry
                    </h3>
                    <p className="card-desc">
                      Guiding men through the Word of God to rediscover their
                      purpose and dignity as created in God's image.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <div className="pattern-divider"></div>

            {/* Impact Section */}
            <section className="impact-section">
              <div className="section-header">
                <h2 className="section-title">
                  Measurable Change, Lasting Impact
                </h2>
                <p className="section-desc">
                  The data reflects our progress and the profound difference our
                  supporters help us make.
                </p>
              </div>

              <div className="stats-grid">
                <div className="stat-card">
                  <p className="stat-number">78%</p>
                  <p className="stat-label">Employment Rate Post-Release</p>
                </div>
                <div className="stat-card">
                  <p className="stat-number">1,200+</p>
                  <p className="stat-label">Inmates Supported Annually</p>
                </div>
                <div className="stat-card">
                  <p className="stat-number">-45%</p>
                  <p className="stat-label">Reduction in Recidivism Rate</p>
                </div>
              </div>

              {/* Chart */}
              <div className="chart-container">
                <div className="chart-text">
                  <h3 className="chart-title">Program Growth Over 3 Years</h3>
                  <p className="chart-desc">
                    The number of individuals successfully completing our
                    rehabilitation programs has shown consistent growth.
                  </p>
                </div>

                <div
                  className="chart-bars"
                  role="img"
                  aria-label="Bar chart showing 75% growth in 2023, 85% in 2024, and 100% in 2025"
                >
                  <div className="bar-item">
                    <div className="bar" style={{ height: "75%" }}>
                      <span className="bar-percentage">75%</span>
                    </div>
                    <span className="bar-label">2023</span>
                  </div>
                  <div className="bar-item">
                    <div className="bar" style={{ height: "85%" }}>
                      <span className="bar-percentage">85%</span>
                    </div>
                    <span className="bar-label">2024</span>
                  </div>
                  <div className="bar-item">
                    <div className="bar" style={{ height: "100%" }}>
                      <span className="bar-percentage">100%</span>
                    </div>
                    <span className="bar-label">2025</span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>

        <button className="fab-button">
          <span className="material-symbols-outlined">favorite</span>
        </button>

        <footer className="footer">
          <div className="footer-columns">
            <div>
              <h3>Adennil Foundation</h3>
              <p>Reclaiming lives.</p>
            </div>

            <div>
              <h3>Contact Us</h3>
              <ul>
                <li>+254 725 978 804</li>
                <li>Adennilfoundation@gmail.com</li>
                <li>Nairobi, Kenya</li>
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
    </>
  );
};

export default Programs;
