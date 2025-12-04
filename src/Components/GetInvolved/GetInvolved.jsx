import React from "react";
import { Link } from "react-router-dom";
import "./GetInvolved.css";
import logo from "../../assets/logo.jpeg";

const GetInvolved = () => {
  return (
    <div className="page-wrapper">
      {/* Floating Donate */}
      <button className="floating-donate pulse">
        <span className="material-symbols-outlined">favorite</span>
      </button>


      <main>
        {/* Hero with gradient overlay */}
        <section className="hero-modern hero-gradient">
          <div className="hero-overlay">
            <h1>See the Man, NOT the sentence!</h1>
            <p>
              Join us in Rediscovering the Father, Son,
              husband,uncle,grandfather and Neighbor Within.Rebuild trust ,Renew
              the future”{" "}
            </p>
            <Link to={"/contact"} className="primary-btn large">
              Get Started Today
            </Link>
          </div>
        </section>

        {/* 3 Ways to Help */}
        <section className="ways-to-help">
          <div className="container">
            <div className="grid-3">
              <div className="action-card">
                <span className="icon-lg material-symbols-outlined">group</span>
                <h3>Volunteer</h3>
                <p>
                  Mentor, teach skills, or help with outreach. Every hour
                  counts.
                </p>
                <Link to={"/contact"} className="secondary-btn">
                  See Opportunities
                </Link>
              </div>

              <div className="action-card featured">
                <span className="icon-lg material-symbols-outlined">
                  favorite
                </span>
                <h3>Donate</h3>
                <p>
                At Adennil Foundation, we guarantee that 100% of your generous donation fuels the journey of reclamation. The funds are dedicated to programs that help men regain their dignity and identity, specifically on the following programs;
1.⁠ ⁠Educational & Vocational Tools<br/>
2.⁠ ⁠Therapeutic & Character Development Programs:<br/>
3.⁠ ⁠Payment of Outstanding Fines and Fees<br/>
4.⁠ ⁠Post-Release Starter Kits<br/>
5.⁠ ⁠Job Placement and Mentorship<br/>
6.⁠ ⁠Health and Wellness Access<br/>
                </p>
                <Link to={"/contact"} className="primary-btn">
                  Donate Now
                </Link>
              </div>

              <div className="action-card">
                <div className="">
                  <span className="icon-lg material-symbols-outlined">
                    handshake
                  </span>
                  <h3>Partner</h3>
                  <p>
                    Corporates, NGOs, and businesses collaborate for greater
                    impact.
                  </p>
                </div>
                <Link to={"/contact"} className="secondary-btn">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Donation Form */}
        <section className="donate-form-section">
          <div className="container form-card">
            <h2>Make Your Donation</h2>
            <form className="donation-form">
              <div className="investment-quotes">
                <blockquote>
                  “Partnering with Adennil Foundation means fueling sustainable
                  solutions that uplift communities and restore dignity. Every contribution creates measurable impact, opening doors
                  to education, rehabilitation, and renewed leadership.”

                </blockquote>
                <blockquote>
                  
                  
                </blockquote>
              </div>

              <a href="/contact" className="primary-btn full">
                Email Us For Donation
              </a>
              <p className="secure">
                <span className="material-symbols-outlined">lock</span> Secure ·
                Transparent
              </p>
            </form>
          </div>
        </section>

        {/* Success Story Split Section */}
        <section className="impact-timeline">
  <h2>Journey To Reclamation</h2>
  
  <div className="timeline">
    <div className="timeline-step">
      <span className="step-icon material-symbols-outlined">psychology</span>
      <p>1. Seed of Self-Reflection & Acceptance</p>
    </div>

    <div className="timeline-step">
      <span className="step-icon material-symbols-outlined">visibility</span>
      <p>2. Reclaiming the Inner Mirror</p>
    </div>

    <div className="timeline-step">
      <span className="step-icon material-symbols-outlined">psychology_alt</span>
      <p>3. Cognitive Restructuring</p>
    </div>

    <div className="timeline-step">
      <span className="step-icon material-symbols-outlined">diversity_3</span>
      <p>4. Branching into Pro-Social Bonds</p>
    </div>

    <div className="timeline-step">
      <span className="step-icon material-symbols-outlined">handyman</span>
      <p>5. Skill-to-Self Worth</p>
    </div>

    <div className="timeline-step">
      <span className="step-icon material-symbols-outlined">logout</span>
      <p>6. Release & Reintegration</p>
    </div>

    <div className="timeline-step">
      <span className="step-icon material-symbols-outlined">lightbulb</span>
      <p>7. Secured Purpose & Contribution</p>
    </div>

    <div className="timeline-step">
      <span className="step-icon material-symbols-outlined">school</span>
      <p>8. Mentorship & Legacy</p>
    </div>
  </div>
</section>

        {/* Mission & Vision */}
        <section className="mission-vision">
          <div className="container">
            <p>
              “To see every incarcerated man
              reclaim his inherent God-given dignity and identity, transforming
              from a label into a leader, a responsible father, and a pillar of
              integrity within his family and community, prepared to live a life
              of lasting purpose and freedom”
            </p>
          </div>
        </section>

        {/* Call to Action Footer */}
        <section className="cta-footer">
          <div className="container">
            <h2>Ready to Make a Difference?</h2>
            <a href="/contact" className="primary-btn full">
              Join us Today
            </a>{" "}
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
              <li>@Adennilfoundation@gmail. Com</li>
            </ul>
          </div>

          <div>
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/programs">Programs</a>
              </li>
              <li>
                <a href="/get-involved">Get Involved</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
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
