import React from 'react';


const AboutSection = () => (
  <section id="info" className="light--content" aria-label="Personal Information">
    <h3 className="content--title">

      Personal Info
    </h3>

    <div className="personal-info--content">
      <div>
        <span>

          Full Name
        </span>

        Kush Guglani
      </div>

      <div>
        <span className="email">
          <i className="fas fa-at" />
        </span>
        <a
          href="mailto:kushg.tech@gmail.com?"
          className="about-links"
        >

          kushg.tech@gmail.com
        </a>
      </div>

      <div>
        <span className="phone">
          <i className="fas fa-phone" />
        </span>

        +91 - 8909555321
        <br />
      </div>

      <div>
        <span className="address">
          <i className="fas fa-futbol" />
        </span>
        <ul className="hobby--list" aria-label="Hobbies">
          <li>

            Travelling
          </li>
          <li>

            Playing Computer Games
          </li>
          <li>

            Photography
          </li>
          <li>

            Watching Horror Movies
          </li>
          <li>

            Playing Cricket
          </li>
          <li>

            Listening to Music
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default AboutSection;
