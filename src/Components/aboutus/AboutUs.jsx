import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async"; // New SEO import

import member1 from "../../assets/member1.jpeg";
import member2 from "../../assets/member2.jpeg";
import member3 from "../../assets/member3.jpeg";
import member4 from "../../assets/member4.jpeg";
import member5 from "../../assets/member5.jpeg";
import member8 from "../../assets/member8.jpeg";
import logo from "../../assets/logo.jpeg";
import member9 from "../../assets/member9.jpg";
import member10 from "../../assets/member10.jpeg";
import member11 from "../../assets/member11.jpeg";
import member12 from "../../assets/member12.jpeg";
import member13 from "../../assets/member13.jpeg";
import member14 from "../../assets/member13.jpg";
import videoSource from "../../assets/about-vid.mp4";

import "./AboutUs.css";

const AboutUs = () => {
  return (
    <>
      {/* --- SEO METADATA START --- */}
      <Helmet>
        <title>About Us | Adennil Foundation - Our Story & Leadership</title>
        <meta
          name="description"
          content="Discover the story of Adennil Foundation, founded in 2023 by Elizabeth Akinyi. Learn about our mission to provide a mirror of reflection for incarcerated men."
        />
        <meta
          name="keywords"
          content="Adennil Foundation story, Elizabeth Akinyi, Elizabeth Ogallo, prison rehabilitation Kenya, Nairobi West Prison partnership"
        />

        {/* Open Graph for Social Media */}
        <meta property="og:title" content="Our Story | Adennil Foundation" />
        <meta
          property="og:description"
          content="Rebuilding lives from the inside out. Meet the team behind Adennil Foundation."
        />
        <meta property="og:type" content="article" />
      </Helmet>
      {/* --- SEO METADATA END --- */}

      <div className="about-us-container">
        <main className="main-content">
          <section className="heroo-section">
            <div
              className="hero-content"
              style={{
                backgroundImage: `url(${member9})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
                backgroundColor: "#4B0082",
              }}
            >
              <div className="heroo-content">
                <h1 className="hero-title">Our Story:</h1>
              </div>
            </div>
          </section>

          <div className="quote">
            <p className="font-sans text-left">
              Driven by this concern, during her time as an intern in prison,
              Ms. Elizabeth found herself asking a pivotal question: “What truly
              lies at the root of this crisis?” It became clear that the missing
              link in both prevention and rehabilitation was not simply
              instruction but reflection. These men needed more than rules or
              reprimands, they needed a mirror!
              <br /> A chance to see for themselves who they are, who they have
              become, and who they still have the power to be. Many of the
              incarcerated men lacked guidance on what truly defines healthy
              manhood. <br />
              They did not understand what strengthens that identity, what
              distorts it, or how a man who has lost his way can reclaim his
              dignity, purpose, and leadership. Yet the desire for
              transformation was there; they simply needed direction, structure,
              and support. This realization fueled the creation of Adennil
              Foundation, in February 2023. <br /> A Foundation that serves as a
              mirror to try and remind those incarcerated that they still have a
              chance to regain back their dignity and identity as men regardless
              of the crime committed, whether intentionally or not. By equipping
              them with clarity, self-awareness, and the tools to redefine their
              lives, we prepare them to return to a society that o nce stripped
              them of the title “leader” ready instead to earn it back with
              integrity, Identity, responsibility, and renewed purpose.
              <br /> It is dedicated to help men rebuild themselves from the
              inside out, even as they serve their sentences. One life at a
              time!
            </p>
          </div>

          <div className="content-wrapper">
            <section className="story-section">
              <div className="grid-layout">
                <div className="birth-card">
                  <h2 className="section-title indigo-title">The Spark</h2>
                  <p className="paragraph">
                    Ms. Elizabeth Akinyi witnessed a sobering reality, “An
                    overwhelming number of men entering incarceration” This
                    experience led her to a profound question, “With so many men
                    behind bars, who is left to support, protect, and provide
                    for their families and communities?” Driven by this concern,
                    during her time as an intern in the prison, Ms. Elizabeth
                    found herself asking a pivotal question: “What truly lies at
                    the root of this crisis?” It became clear that the missing
                    link in both prevention and rehabilitation was not simply
                    instruction but reflection.
                  </p>
                </div>
                <div className="birth-card">
                  <h2 className="section-title indigo-title">The Birth</h2>
                  <p className="paragraph text-left">
                    Adennil Foundation was born in February 2023 out of a
                    profound conviction: “that every incarcerated man,
                    regardless of his past or the circumstances that led to his
                    sentence, still holds the right to reclaim his dignity,
                    identity, and purpose.”
                  </p>
                </div>
              </div>
            </section>

            <section className="mission-vision-section subtle-pattern">
              <div className="grid-three">
                <div className="card">
                  <div className="card-header bg-indigo">
                    <h3 className="card-title text-primary">Mission</h3>
                  </div>
                  <div className="card-body">
                    <p className="card-text">
                      To help inmates embrace the idea that being locked up does
                      not translate to mental stagnation.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header bg-indigo">
                    <h3 className="card-title text-primary">Vision</h3>
                  </div>
                  <div className="card-body">
                    <p className="card-text">
                      To be the leading foundation in assisting the inmates in
                      knowing that how you view yourself determines how you will
                      be.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header bg-indigo">
                    <h3 className="card-title text-primary">Our Purpose</h3>
                  </div>
                  <div className="card-body">
                    <p className="card-text">
                      To create a base that aims at having a sense of self
                      awareness, emotional intelligence and acceptance for a
                      better tomorrow.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="values-section">
              <div className="section-header">
                <h2 className="section-title indigo-title">Our Values</h2>
                <p className="section-subtitle">
                  The principles that guide our work, our commitment, and our
                  vision for a better future.
                </p>
              </div>

              <div className="grid-values">
                <div className="value-card">
                  <span className="material-symbols-outlined icon">
                    mindfulness
                  </span>
                  <h3 className="value-title">1. Reflection</h3>
                  <p className="value-desc">Courage to Face the Self.</p>
                </div>
                <div className="value-card">
                  <span className="material-symbols-outlined icon">
                    auto_stories
                  </span>
                  <h3 className="value-title">2. Recognition</h3>
                  <p className="value-desc">
                    Understanding the rational Consequence
                  </p>
                </div>
                <div className="value-card">
                  <span className="material-symbols-outlined icon">
                    verified_user
                  </span>
                  <h3 className="value-title">3. Reconstruction</h3>
                  <p className="value-desc">Building Rational dignity</p>
                </div>
                <div className="value-card">
                  <span className="material-symbols-outlined icon">
                    diversity_1
                  </span>
                  <h3 className="value-title">4. Re-integration</h3>
                  <p className="value-desc">Living the New Mindset.</p>
                </div>
              </div>
            </section>

            <section className="team-section">
              <div className="section-header">
                <h2 className="section-title indigo-title">
                  Board of Directors
                </h2>
              </div>

              <div className="team-members">
                <div className="team-member">
                  <img
                    src={member2}
                    alt="Pst. Naphtally Ogallo - Chairman of Adennil Foundation"
                  />
                  <h3>Pst. Naphtally Ogallo</h3>
                  <p>Chairman</p>
                </div>
                <div className="team-member">
                  <img
                    src={member1}
                    alt="Mrs. Alice Wanjiru Wambugu - Secretary of Adennil Foundation"
                  />
                  <h3>Mrs. Alice Wanjiru Wambugu</h3>
                  <p>Secretary</p>
                </div>
                <div className="team-member">
                  <img
                    src={member3}
                    alt="Mrs. Helida Ogallo - Treasurer of Adennil Foundation"
                  />
                  <h3>Mrs. Helida Ogallo</h3>
                  <p>Treasurer</p>
                </div>
                <div className="team-member">
                  <img
                    src={member4}
                    alt="Ms. Elizabeth Akinyi - Founder & CEO of Adennil Foundation"
                  />
                  <h3>Ms. Elizabeth Akinyi</h3>
                  <p>Founder & CEO</p>
                </div>
              </div>
            </section>

            <section className="quote-section">
              <div className="quote-card">
                <span className="material-symbols-outlined icon-quote">
                  format_quote
                </span>
                <blockquote className="blockquote">
                  “Every sunset erases the mistake of yesterday, and every
                  sunrise offers the chance to stand taller. Adennil reminds you
                  that the sun is still shining on your identity.”
                </blockquote>
                <cite className="cite">Miss Elizabeth</cite>
                <p className="cite-role">Founder & CEO, Adennil Foundation</p>
              </div>
            </section>

            <section className="impact-section" aria-labelledby="impact-title">
              <div className="section-header">
                <h2 id="impact-title" className="section-title indigo-title">
                  Impact Snapshot
                </h2>
              </div>

              <div className="grid-impact">
                <div className="impact-card">
                  <div className="impact-image">
                    <img
                      src={"/cake-cutting.jpeg"}
                      alt="Adennil Foundation Talent Show Celebration December 2023"
                      loading="lazy"
                    />
                  </div>
                  <p className="impact-caption">
                    <span className="font-bold">
                      Adennil Celebrated Talent: December 7, 2023! 🎂
                    </span>
                    <br />A custom-made cake was presented to all participants
                    of our talent show, recognizing creative potential within
                    correctional facilities.
                  </p>
                </div>

                <div className="impact-card">
                  <div className="impact-image">
                    <img
                      src={member14}
                      alt="Adennil Foundation Chapati Forum Event"
                      loading="lazy"
                    />
                  </div>
                  <p className="impact-caption">
                    <span className="font-bold">
                      🤝 Adennil Joined the 'Chapati Forum' Dec 28, 2023 🧑‍🍳
                    </span>
                    <br />
                    Hosted by Madam Mercy Nungari, bringing inmates and visitors
                    together through communal cooking.
                  </p>
                </div>

                <div className="impact-card">
                  <div className="impact-image">
                    <img
                      src={member11}
                      alt="Fine Offset Initiative by Adennil Foundation at Nairobi West Prison"
                      loading="lazy"
                    />
                  </div>
                  <p className="impact-caption">
                    <span className="font-bold">
                      🎁 Fine Offset Initiative (December 2024) 🚪
                    </span>
                    <br />
                    Partnered with Nairobi West Prison and Beatrice Muriu to pay
                    pending fines for inmates, allowing them to return home.
                  </p>
                </div>

                <div className="impact-card">
                  <div className="impact-image">
                    <img
                      src={"/office.jpeg"}
                      alt="Cognitive Training program for youth by Adennil Foundation"
                      loading="lazy"
                    />
                  </div>
                  <p className="impact-caption">
                    <span className="font-bold">
                      🧠 Cognitive Training Success: Youth Correctional Center
                      🧑‍🎓
                    </span>
                    <br />A successful three-day training program focusing on
                    self-regulation and wise decision-making skills.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </main>

        <section className="w-full max-w[90vw] h-auto rounded-md z-10">
          <video
            src={videoSource}
            controls
            style={{ width: "100%", height: "400px" }}
            className="shadow-lg border-1 border-gray-300 rounded-md"
          >
            Your browser does not support the video tag.
          </video>
        </section>

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

        <div className="donate-fab">
          <button className="donate-fab-btn">
            <span className="material-symbols-outlined">
              volunteer_activism
            </span>
            <span className="sr-only">Donate</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
