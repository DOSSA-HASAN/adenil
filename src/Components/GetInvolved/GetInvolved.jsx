import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./GetInvolved.css";

const GetInvolved = () => {
  return (
    <div className="page-wrapper">
      {/* --- SEO METADATA --- */}
      <Helmet>
        <title>Get Involved | Support Inmate Rehabilitation in Kenya</title>
        <meta
          name="description"
          content="Help Adennil Foundation rebuild lives. Volunteer as a mentor, donate to vocational training, or partner with us to reduce recidivism in Nairobi."
        />
        <meta
          name="keywords"
          content="volunteer prison ministry, donate to rehabilitation, NGO partnerships Kenya, inmate mentorship"
        />
      </Helmet>

      {/* Floating Donate Button */}
      <button className="floating-donate pulse" aria-label="Donate Now">
        <span className="material-symbols-outlined">favorite</span>
      </button>

      <main>
        {/* Hero Section */}
        <section className="hero-modern hero-gradient">
          <div className="hero-overlay">
            <h1>See the Man, NOT the sentence!</h1>
            <p>
              Join us in rediscovering the Father, Son, Husband, Uncle, and
              Neighbor within. Together, we rebuild trust and renew the future.
            </p>
            <Link to="/contact" className="primary-btn large">
              Get Started Today
            </Link>
          </div>
        </section>

        {/* 3 Ways to Help */}
        <section className="ways-to-help">
          <div className="container">
            <div className="grid-3">
              {/* Volunteer */}
              <div className="action-card">
                <span className="icon-lg material-symbols-outlined">group</span>
                <h3>Volunteer</h3>
                <p>
                  Mentor, teach skills, or help with outreach. Every hour counts
                  toward a life transformed.
                </p>
                <Link to="/contact" className="secondary-btn">
                  See Opportunities
                </Link>
              </div>

              {/* Donate */}
              <div className="action-card featured">
                <span className="icon-lg material-symbols-outlined">
                  favorite
                </span>
                <h3>Donate</h3>
                <p>
                  <strong>100% of your donation fuels reclamation:</strong>
                  <br />• Educational & Vocational Tools
                  <br />• Therapeutic Programs
                  <br />• Outstanding Fines/Fees Payment
                  <br />• Post-Release Starter Kits
                </p>
                <Link to="/contact" className="primary-btn">
                  Donate Now
                </Link>
              </div>

              {/* Partner */}
              <div className="action-card">
                <span className="icon-lg material-symbols-outlined">
                  handshake
                </span>
                <h3>Partner</h3>
                <p>
                  Corporates, NGOs, and local businesses collaborating for
                  greater community impact.
                </p>
                <Link to="/contact" className="secondary-btn">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Donation Info Card */}
        <section className="donate-form-section">
          <div className="container form-card">
            <h2>Support Our Mission</h2>
            <div className="donation-form">
              <div className="investment-quotes">
                <blockquote>
                  “Partnering with Adennil Foundation means fueling sustainable
                  solutions that uplift communities and restore dignity.”
                </blockquote>
              </div>
              <Link to="/contact" className="primary-btn full">
                Email Us For Donation Details
              </Link>
              <p className="secure">
                <span className="material-symbols-outlined">lock</span> Secure ·
                Transparent · Audited
              </p>
            </div>
          </div>
        </section>

        {/* Journey Timeline */}
        <section className="impact-timeline">
          <h2>Journey To Reclamation</h2>
          <div className="timeline">
            {[
              { icon: "psychology", text: "1. Seed of Self-Reflection" },
              { icon: "visibility", text: "2. Reclaiming the Inner Mirror" },
              { icon: "psychology_alt", text: "3. Cognitive Restructuring" },
              { icon: "diversity_3", text: "4. Pro-Social Bonds" },
              { icon: "handyman", text: "5. Skill-to-Self Worth" },
              { icon: "logout", text: "6. Release & Reintegration" },
              { icon: "lightbulb", text: "7. Secured Purpose" },
              { icon: "school", text: "8. Mentorship & Legacy" },
            ].map((step, index) => (
              <div key={index} className="timeline-step">
                <span className="step-icon material-symbols-outlined">
                  {step.icon}
                </span>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Vision Quote */}
        <section className="mission-vision">
          <div className="container">
            <p className="vision-text">
              “To see every incarcerated man reclaim his inherent God-given
              dignity, transforming from a label into a leader, a responsible
              father, and a pillar of integrity.”
            </p>
          </div>
        </section>

        {/* Call to Action Footer */}
        <section className="cta-footer">
          <div className="container">
            <h2>Ready to Make a Difference?</h2>
            <Link to="/contact" className="primary-btn full">
              Join us Today
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
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
  );
};

export default GetInvolved;
