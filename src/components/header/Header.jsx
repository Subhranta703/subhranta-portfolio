import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import './header.css';

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Subhranta Kumar Nayak</h1>
<<<<<<< HEAD
        <h5 className="text-light">Freelance Full-Stack Developer</h5>
=======
        <h5 className="text-light">MERN Stack / Freelance (web)  Developer</h5>
>>>>>>> master
        <CTA />
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
