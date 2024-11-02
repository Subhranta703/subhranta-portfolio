import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Badge from 'react-bootstrap/Badge';
import './work.css';

// Import your logo images
import fullStack from '../../assets/full-stack.png'; // Adjust the path as necessary
import ReactImage from '../../assets/react-img.png';
import Js from '../../assets/js.png'; // Import other logos as needed

const resumeExperience = [
  {
    title: "Full Stack Web Developer",
    company: "Warme Foundation",
    years: "July 2024 - Present",
    mainTech: ["JavaScript", "React JS", "Node JS", "Express JS", "Tailwind CSS"],
    technologies: ["JavaScript", "React JS", "Node JS", "Express JS", "Tailwind CSS"],
    description: [
      "Developed and launched a responsive website from scratch, integrating a secure payment gateway, user contact section, and AI chatbot for automated support, optimizing performance and enhancing user engagement."
    ],
    logo: fullStack,
  },
  {
    title: "React JS Developer Intern",
    company: "Medius AI",
    years: "May 2024 - July 2024",
    mainTech: ["JavaScript", "React JS", "Next JS", "HTML", "CSS"],
    technologies: ["JavaScript", "React JS", "Next JS", "HTML", "CSS", "Figma"],
    description: [
      "Developed an innovative React web application, significantly enhancing user experience through secure authentication and seamless RESTful API integration.",
      "Constructed a responsive website from the ground up, implementing key functionalities to further improve the user experience. Offered technical guidance and resolved complex challenges with a growth mindset."
    ],
    logo: ReactImage,
  },
  {
    title: "Front-end Developer Intern",
    company: "InterstellarXR",
    years: "Oct 2023 - Dec 2023",
    mainTech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    description: [
      "Led the development of the company's website from inception, transforming Figma designs into a fully functional site while optimizing performance and enhancing user experience."
    ],
    logo: Js,
  },
];

class Work extends Component {
  render() {
    const workSection = resumeExperience.map((work, i) => {
      const mainTech = work.mainTech.map((technology, index) => (
        <Badge pill className="main-badge mr-2 mb-2" key={index}>
          {technology}
        </Badge>
      ));

      const tech = work.technologies.map((technology, index) => (
        <Badge pill className="experience-badge mr-2 mb-2" key={index}>
          {technology}
        </Badge>
      ));

      const description = work.description.map((desc, index) => (
        <p key={index} className="work-description">{desc}</p>
      ));

      return (
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date={work.years}
          iconStyle={{ background: '#6d7eb3', color: '#040100', textAlign: 'center' }}
          icon={
            <img 
              src={work.logo} 
              alt={`${work.company} logo`} 
              className="experience-icon" 
              style={{ width: '40px', height: '40px' }} 
            />
          }
          key={i}
        >
          <div className="work-main-tech">{mainTech}</div>
          <h3 className="vertical-timeline-element-title">{work.title}</h3>
          <h4 className="vertical-timeline-element-subtitle">{work.company}</h4>
          {description}
          <div className="work-technologies">{tech}</div>
        </VerticalTimelineElement>
      );
    });

    return (
      <>
        <h1 className="text-4xl section-heading">Experiences & Prev Work</h1>
        <section id="resume" className="pb-5">
          <div className="col-md-12 mx-auto">
            <div className="col-md-12">
              <h1 className="section-title">
                <span className="text-black">Experience</span>
              </h1>
            </div>
          </div>
          <div className="col-md-8 mx-auto">
            <VerticalTimeline>
              {workSection}
              <VerticalTimelineElement
                iconStyle={{ background: '#58d934', color: '#fff', textAlign: 'center' }}
                icon={
                  <img 
                    src={fullStack} 
                    alt="default logo" 
                    className="experience-icon" 
                    style={{ width: '40px', height: '40px' }} 
                  />
                }
              />
            </VerticalTimeline>
          </div>
        </section>
      </>
    );
  }
}

export default Work;
