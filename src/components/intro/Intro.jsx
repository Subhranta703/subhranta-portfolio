import "./intro.css";

import { FaAward } from "react-icons/fa";
import React from "react";
import { VscFolderLibrary } from "react-icons/vsc";
import img from '../../assets/Me.png'




const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={img} alt="subhranta kumar nayak" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Year
              </small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5> Freelance Projects</h5>
              <small>2 Completed Projects</small>
            </article>
          </div>
          <p>
          Full Stack Developer with over a year of experience specializing in frontend development, proficient in designing and implementing responsive user interfaces using React. Skilled in translating complex designs and wireframes into high-quality, efficient code to optimize user experience. Experienced in JavaScript, React workflows, backend integration, and RESTful APIs. Capable of monitoring frontend performance, troubleshooting, and enhancing overall application performance. Recent projects include building full-stack applications with a focus on speed, reliability, and responsive design.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
