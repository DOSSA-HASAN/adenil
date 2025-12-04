import React from "react";
import { Link } from "react-router-dom";

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
      <div className="about-us-container">
        {/* <header className="top-navbar">
                  <div className="logo-section">
                  <img
              src={logo}
              alt="Adennil Foundation Logo"
              className="logo-icon"
            />
                    <h2 className="logo-text">Adennil Foundation</h2>
                  </div>
        
                  
                  <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">AboutUs</Link>
          <Link to="programs">Programs</Link>
          <Link to="/get-involved">Get Involved</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        
        <Link 
                to="/get-involved" 
                className="donate-now-btn"
              >
                Donate Now
              </Link>
            </header> */}

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
              {/* Gradient overlay */}
              {/* <div className="heroo-overlay"></div> */}

              {/* Content */}
              <div className="heroo-content">
                <h1 className="hero-title">Our Story:</h1>
              </div>
            </div>
          </section>

          <div className="quote">
          <p className="font-sans text-left">
            Driven by this concern, during her time 
            as an intern in prison, Ms. Elizabeth found herself
             asking a pivotal question: “What truly lies at the root 
             of this crisis?” It became clear that the missing link in 
             both prevention and rehabilitation was not simply 
             instruction but reflection. These men needed more 
             than rules or reprimands, they needed a mirror!
             <br /> A chance to see for themselves who they are,
               who they have become, and who they still have the power to be.
                Many of the incarcerated men lacked guidance on 
                what truly defines healthy manhood. <br /> 
                They did not understand what strengthens that identity, 
                what distorts it, or how a man who has lost his way can
                 reclaim his dignity, purpose, and leadership. 
                 Yet the desire for transformation was there; they 
                 simply needed direction, structure, and support. 
                 This realization fueled the creation of Adennil Foundation,
                  in February 2023. <br /> A Foundation that serves as a mirror 
                  to try and remind those incarcerated that they still 
                  have a chance to regain back their dignity and identity
                   as men regardless of the crime committed,
                    whether intentionally or not.
                     By equipping them with clarity, self-awareness,
                      and the tools to redefine their lives,
                       we prepare them to return to a society that o
                       nce stripped them of the title “leader” ready instead 
                       to earn it back with integrity, Identity, 
                       responsibility, and renewed purpose.<br /> It is dedicated to help men rebuild themselves from the inside out, even as they serve their sentences. One life at a time!
          </p>
          </div>

          <div className="content-wrapper">
            <section className="story-section">
              <div className="grid-layout">
                {/* <div className="story-text">
                  <h2 className="section-title indigo-title">The Spark</h2>
                  <p className="paragraph">
                    Ms.Elizabeth Ogallo witnessed a sobering reality, “An
                    overwhelming number of men entering incarceration” This
                    experience led her to a profound question, “With so many men
                    behind bars, who is left to support, protect, and provide
                    for their families and communities.?” Driven by this
                    concern, during her time as an intern in the prison, Ms.
                    Elizabeth found herself asking a pivotal question: “What
                    truly lies at the root of this crisis?” It became clear that
                    the missing link in both prevention and rehabilitation was
                    not simply instruction but reflection. These men needed more
                    than rules or reprimands, they needed a mirror. A chance to
                    see for themselves who they are, who they have become, and
                    who they still have the power to be. Many of the
                    incarcerated men lacked guidance on what truly defines
                    healthy manhood. They did not understand what strengthens
                    that identity, what distorts it, or how a man who has lost
                    his way can reclaim his dignity, purpose, and leadership.
                    Yet the desire for transformation was there, they simply
                    needed direction, structure, and support.
                  </p>
                </div> */}
                <div className="birth-card">
                  <h2 className="section-title indigo-title">The Spark</h2>
                  <p className="paragraph">
                    Ms. Elizabeth Akinyi witnessed a sobering reality, “An
                    overwhelming number of men entering incarceration” This
                    experience led her to a profound question, “With so many men
                    behind bars, who is left to support, protect, and provide
                    for their families and communities?” Driven by this
                    concern, during her time as an intern in the prison, Ms.
                    Elizabeth found herself asking a pivotal question: “What
                    truly lies at the root of this crisis?” It became clear that
                    the missing link in both prevention and rehabilitation was
                    not simply instruction but reflection. These men needed more
                    than rules or reprimands, they needed a mirror. A chance to
                    see for themselves who they are, who they have become, and
                    who they still have the power to be. Many of the
                    incarcerated men lacked guidance on what truly defines
                    healthy manhood. They did not understand what strengthens
                    that identity, what distorts it, or how a man who has lost
                    his way can reclaim his dignity, purpose, and leadership.
                    Yet the desire for transformation was there, they simply
                    needed direction, structure, and support.
                  </p>
                </div>
                <div className="birth-card">
                  <h2 className="section-title indigo-title">The Birth</h2>
                  <p className="paragraph text-left">
                    Adennil Foundation was born in February 2023 out of a
                    profound conviction: “that every incarcerated man,
                    regardless of his past or the circumstances that led to his
                    sentence, still holds the right to reclaim his dignity,
                    identity, and purpose.” The Foundation exists as a
                    reflective guide reminding these men that their stories are
                    not over, and that leadership can be rebuilt with empathy, reflection, integrity, responsibility, and renewed
                    vision by cultivating clarity, self-awareness, and
                    practical tools for reclamation. Adennil prepares them to
                    re-enter a society that once dismissed their potential, now
                    ready to demonstrate it. <br />Our mission is to support men in
                    rebuilding themselves from the inside out, even while they
                    serve their time. One man at a time!
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
                      not translate to mental stagnation.{" "}
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

                  <h3 className="value-title">1.Reflection</h3>
                  <p className="value-desc">Courage to Face the Self.</p>
                </div>

                <div className="value-card">
                  <span className="material-symbols-outlined  icon">
                    auto_stories
                  </span>

                  <h3 className="value-title">2.⁠ ⁠⁠Recognition</h3>
                  <p className="value-desc">
                    Understanding the rational Consequence
                  </p>
                </div>

                <div className="value-card">
                  <span className="material-symbols-outlined icon ">
                    verified_user
                  </span>

                  <h3 className="value-title">3.⁠ ⁠⁠Reconstruction</h3>
                  <p className="value-desc">Building Rational dignity</p>
                </div>

                <div className="value-card">
                  <span className="material-symbols-outlined  icon">
                    diversity_1
                  </span>
                  <h3 className="value-title">4.⁠ ⁠⁠Re-integration</h3>
                  <p className="value-desc">Living the New Mindset.</p>
                </div>
              </div>
            </section>

            <section className="team-section">
              <div className="section-header">
                <h2 className="section-title indigo-title">
                  Board of Directors
                </h2>
                <p className="section-subtitle">
                  Meet the dedicated individuals behind the formation of Adennil
                  Foundation, led by our Chairman , Secretary and treasurer.
                  Together, we are committed to reclaiming the dignity and
                  identity of the men behind bars .
                </p>
              </div>

              <div className="team-members">
                <div className="team-member">
                  <img src={member2} alt="Jane Smith" />
                  <h3>Pst. Naphtally Ogallo</h3>
                  <p> Chairman</p>
                </div>
                <div className="team-member">
                  <img src={member1} alt="John Doe" />
                  <h3>Mrs. Alice Wanjiru Wambugu</h3>
                  <p>Secretary</p>
                </div>
                <div className="team-member">
                  <img src={member3} alt="Michael Brown" />
                  <h3>Mrs. Helida Ogallo</h3>
                  <p>Treasurer</p>
                </div>
                <div className="team-member">
                  <img src={member4} alt="Miss Elizabeth" />
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
                <p className="cite-role">
                  Founder & CEO, Adennil Foundation
                </p>
              </div>
            </section>

            <section className="impact-section" aria-labelledby="impact-title">
              <div className="section-header">
                <h2 id="impact-title" className="section-title indigo-title">
                  Impact Snapshot
                </h2>
                <p className="section-subtitle">
                  A brief look at our journey and key achievements since our
                  inception.
                </p>
              </div>

              <div className="grid-impact">
                <div className="impact-card">
                  <div className="impact-image">
                    <img
                      src={"/cake-cutting.jpeg"}
                      alt="Participant completing educational workbook in facility library"
                      loading="lazy"
                    />
                  </div>
                  <p className="impact-caption">
                    <span className="font-bold">
                      Adennil Celebrated Talent: A Look Back at the December 7,
                      2023, Event! 🎂
                    </span>
                    <br />
                    On December 7, 2023, Adennil hosted a heartwarming event
                    that recognized creativity and skill. Adennil served up
                    appreciation in a big way! A custom-made cake was presented
                    to all participants of their recent talent show,
                    acknowledging the hard work and artistry they displayed.
                    Their commitment to supporting talent didn't stop with the
                    show. Adennil also extended this appreciation to talents
                    behind bars, recognizing and celebrating the creative
                    potential within correctional facilities.
                  </p>
                </div>

                {/* <div className="impact-card">
                  <div className="impact-image">
                    <img
                      src={"/chapati-2.jpeg"}
                      alt="Participant completing educational workbook in facility library"
                      loading="lazy"
                    />
                  </div>
                  <p className="impact-caption">
                    Adennil Foundation was invited to what we call “ Chapati
                    Forum”by Madam Mercy Nungari,to be part of that event which
                    brings the Inmates and visitors together by the preparing
                    and cooking of chapati’s. This event usually happens ever
                    year mostly on the feastive season which is in december.
                  </p>
                </div> */}

                <div className="impact-card">
                  <div className="impact-image">
                    <img
                      src={member14}
                      alt="Participant completing educational workbook in facility library"
                      loading="lazy"
                    />
                  </div>
                  <p className="impact-caption">
                    <span className="font-bold">
                      🤝 Adennil Foundation Joined the 'Chapati Forum' December
                      28th 2023 🧑‍🍳
                    </span>
                    <br />
                    The Adennil Foundation was invited to participate in the
                    unique annual event known as the "Chapati Forum." This
                    special occasion, hosted by Madam Mercy Nungari, brought
                    inmates and visitors together through the communal
                    preparation and cooking of chapatis. This community-building
                    event typically took place every year, often during the
                    festive season in December. The Foundation joined in this
                    meaningful tradition, fostering connection and shared
                    experience within the facility.
                  </p>
                </div>

                <div className="impact-card">
                  <div className="impact-image">
                    <img
                      src={member13}
                      alt="Volunteer teaching life skills class"
                      loading="lazy"
                    />
                  </div>
                  <p className="impact-caption">
                    <span className="font-bold">
                      🤝 Adennil Foundation Joined the 'Chapati Forum' December
                      28th 2023 🧑‍🍳
                    </span>
                    <br />
                    The Adennil Foundation was invited to participate in the
                    unique annual event known as the "Chapati Forum." This
                    special occasion, hosted by Madam Mercy Nungari, brought
                    inmates and visitors together through the communal
                    preparation and cooking of chapatis. This community-building
                    event typically took place every year, often during the
                    festive season in December. The Foundation joined in this
                    meaningful tradition, fostering connection and shared
                    experience within the facility.
                  </p>
                </div>

                <div className="impact-card">
                  <div className="impact-image">
                    <img
                      src={member11}
                      alt="Group counseling session bringing healing and connection"
                      loading="lazy"
                    />
                  </div>
                  <p className="impact-caption">
                    <span className="font-bold">
                      🎁 A Second Chance: Adennil's Fine Offset Initiative
                      (December 2024) 🚪 In December 2024.
                    </span>
                    <br />
                    The Adennil Foundation addressed the plight of men unable to
                    pay court fines. Recognizing the opportunity for
                    rehabilitation and return to family, Adennil partnered with
                    Nairobi West Prison and Beatrice Muriu to execute a focused
                    initiative. Through this collaboration, the foundation
                    managed to offset the pending fines for several inmates.
                    This act brought immense joy and offered a crucial second
                    chance, enabling the men to find their way home and continue
                    their roles as leaders in their communities.
                  </p>
                </div>

                <div className="impact-card">
                  <div className="impact-image">
                    <img
                      src={"/office.jpeg"}
                      alt="Partnership handshake inside a correctional facility"
                      loading="lazy"
                    />
                  </div>
                  <p className="impact-caption">
                    <span className="font-bold">
                      🧠 Cognitive Training Success: Adennil at the Youth
                      Correctional Training Center 🧑‍🎓 In November 2025.
                    </span>
                    <br />
                    The Adennil Foundation conducted a successful three-day
                    training program for the young boys at the Youth
                    Correctional Training Center (Juvenile). The training
                    focused specifically on topics designed to target the boys'
                    cognitive thinking. The primary goal was for them to begin
                    to understand the critical importance of choosing wisely
                    before acting or speaking. This initiative aimed to equip
                    the youth with essential decision-making and self-regulation
                    skills.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </main>

        {/* Video container */}
        <section className="w-full max-w[90vw] h-auto rounded-md z-10">
          <video
            src={videoSource} // 2. Use the imported variable here
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
