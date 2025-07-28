import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaReact, FaNodeJs, FaBriefcase } from "react-icons/fa";
import "./work.css";

const Work = () => {
  return (
    <section id="work" className="work-section">
      <h2 className="section-title">Work Experience</h2>
      <VerticalTimeline>
         <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#1e3a8a", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #1e3a8a" }}
          date="July 2024 - Feb 2025 "
          iconStyle={{ background: "#1e3a8a", color: "#fff" }}
          icon={<FaBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">Full Stack Web Developer Intern</h3>
          <h4 className="vertical-timeline-element-subtitle">Warme Foundation</h4>
          <p>Technologies: JavaScript, React JS, Node JS, Express JS, Tailwind CSS, MongoDB , Payment method  </p>
          <ul>
            <li> :- Developed and launched a responsive website from scratch.</li>
            <li>Integrated secure payment gateway, user contact section, and AI chatbot.</li>
            <li>Optimized performance and enhanced user engagement.</li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#1e3a8a", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #1e3a8a" }}
          date="May 2024 - July 2024"
          iconStyle={{ background: "#1e3a8a", color: "#fff" }}
          icon={<FaReact />}
        >
          <h3 className="vertical-timeline-element-title">React Developer Intern</h3>
          <h4 className="vertical-timeline-element-subtitle">Medius AI</h4>
          <p>Technologies: React JS, JavaScript , TypeScript , API Handeling , WebSocket </p>
          <ul>
            <li>Designed and implemented reusable UI components to enhance application scalability.</li>
            <li>Collaborated with backend developers to integrate REST APIs seamlessly.</li>
          </ul>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#1e3a8a", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #1e3a8a" }}
          date="Oct 2023 - Dec 2023"
          iconStyle={{ background: "#1e3a8a", color: "#fff" }}
          icon={<FaNodeJs />}
        >
          <h3 className="vertical-timeline-element-title">Front-end Developer Intern</h3>
          <h4 className="vertical-timeline-element-subtitle">InterstellarXR</h4>
          <p>Technologies: HTML , CSS , JavaScript , BootStrap , Tailwind CSS</p>
          <ul>
            <li>Created interactive 3D UI interfaces for XR experiences using React and WebXR.</li>
            <li>Worked closely with designers to ensure UI consistency across devices.</li>
          </ul>
        </VerticalTimelineElement>

       
      </VerticalTimeline>
    </section>
  );
};

export default Work;
