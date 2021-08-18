import React from 'react';


const socialLinks = [
  {
    name: 'kushgulani',
    icon: 'fa-linkedin',
    url: 'https://www.linkedin.com/in/kush-guglani-b183356a/',
  },
  {
    name: 'kush_is_always_khush',
    icon: 'fa-instagram',
    url: 'https://www.instagram.com/kush_is_always_khush/',
  },
  {
    name: 'kushgulani',
    icon: 'fa-github',
    url: 'https://github.com/kushguglani',
  },
  {
    name: 'kushgulani',
    icon: 'fas fa-envelope',
    url: 'mailto:kushg.tech@gmail.com',
  },
  {
    name: 'kushguglani',
    icon: 'fas fa-phone',
    url: 'tel:+918909555321',
  },
];

const HeaderBar = () => (
  <div className="header-bar" role="navigation">
    <div className="header-bar--links">
      <ul className="header-bar--links__list">
        <li className="header-bar--links__item">
          <a href="#experiences" title="experiences">

            Experiences
          </a>
        </li>
        <li className="header-bar--links__item">
          <a href="#skills" title="skills">

            Skills
          </a>
        </li>
        <li className="header-bar--links__item">
          <a href="#projects" title="projects">

            Projects
          </a>
        </li>
        <li className="header-bar--links__item">
          <a href="#education" title="education">

            Education
          </a>
        </li>
        <li className="header-bar--links__item">
          <a href="#info" title="personal info">

            Info
          </a>
        </li>
      </ul>
    </div>
    <div className="social--icons">
      {socialLinks.map(link => (
        <div key={link.icon} className="social--icon__item">
          <a href={link.url} title={`${link.icon.replace('fa-', '')} profile`}>
            <i className={`fab ${link.icon}`} />
          </a>
        </div>
      ))}
    </div>
  </div>
);

export default HeaderBar;
