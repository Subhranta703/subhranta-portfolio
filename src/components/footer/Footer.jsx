import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  return (
    <footer>
<<<<<<< HEAD
      <a href="#home" className="footer__logo">Subhranta's Portfolio</a>
      <ul className="permalinks">
=======
      {/* <a href="#home" className="footer__logo">Subhranta's Portfolio</a> */}
      {/* <ul className="permalinks">
>>>>>>> master
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
<<<<<<< HEAD
      </ul>
=======
      </ul> */}
>>>>>>> master
      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/subhranta-kumar-nayak-8917521b6/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/Subhranta703" target="_blank" rel="noreferrer" ><FaGithub /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Subhranta 2024. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer