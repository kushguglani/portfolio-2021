import React from 'react';


const AboutSection = () => (
  <section id="info" className="light--content" aria-label="Personal Information">
    <h3 className="content--title">

      Personal Info
    </h3>

    <div className="personal-info--content">
      <div>
        <span className='i-like'>
          I <i className="fas fa-heart" />
        </span>
        <ul>
          <li>
            In my spare time, you will find me teaching, reading books, playing games, contributing to community.
          </li>
          <li>I occasionally cooking especially with friends and family.
          </li>
          <li>I get my mood boost from the intense experiences of horror movies
          </li>
          <li>Travelling, exploring lands and capturing moments are always my favorite break from work.
          </li>
        </ul>
    </div>

    <div>
      <span className="email">
        <i className="fas fa-at" />
      </span>
      <a
        href="mailto:guglani.tech@gmail.com?"
        className="about-links"
      >

        guglani.tech@gmail.com
      </a>
    </div>

    <div>
      <span className="phone">
        <i className="fas fa-graduation-cap" />
      </span>

      Bachelor of Technology - IT (2012-2016)
      <br />
    </div>

    {/* <div>
      <span className="address">
        <i className="fas fa-futbol" />
      </span>
      <ul className="hobby--list" aria-label="Hobbies">
        <li>

          Exploring distant lands
        </li>
        <li>

          Blogging, reading and writing

        </li>
        <li>

          Playing Games
        </li>
        <li>

          Capturing moments
        </li>
        <li>

          Watching Horror Movies
        </li>
        <li>

          Teaching
        </li>
        <li>

          Music Lover
        </li>
      </ul>
    </div> */}
  </div>
  </section >
);

export default AboutSection;
