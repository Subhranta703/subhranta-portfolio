import "./portfolio.css";

import IMG1 from "../../assets/IMG1.png";
import IMG3 from "../../assets/IMG2.jpg";
import IMG2 from "../../assets/IMG2.png";
import IMG4 from "../../assets/IMG3.png";
import React from "react";

// Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Student Productivity Hub (Hackathon Based Project)",
      img: IMG1,
      description:
        "All-in-one AI-powered productivity platform for students, featuring notes summarization, task management, timetables, and smart study assistance.",
      technologies: "React.js | TailwindCSS | JavaScript | HTML | CSS | Gemini AI API",
      link: "https://hack-suiit.vercel.app/",
      github: "https://github.com/Subhranta703/hack_suiit",
    },
    {
      id: 2,
      title: "Skilled Matched ",
      img: IMG2,
      description:
        "AI-powered career assistant that helps users analyze resumes, explore personalized job roles, generate cover letters, and follow structured learning roadmaps — all in one platform.",
      technologies: "React.js | Tailwind CSS | Node.js | Express | MongoDB | Google Gemini API",
      link: "https://skilled-matched.vercel.app/",
      github: "https://github.com/Subhranta703/SkilledMatched",
    },
    {
      id: 3,
      title: "Drive Storage Management",
      img: IMG3,
      description: "Role-based file storage system for students and teachers. Upload, view, and share documents securely. Built for collaborative academic environments with subject-based folders and download links.",
      technologies: "MERN Stack | Cloudinary | JWT | Tailwind CSS | EJS",
      link: "https://github.com/Subhranta703/Drive-storage-Management-",
      github: "https://github.com/Subhranta703/Drive-storage-Management-",
    },
    // {
    //   id: 4, // Ensure this id is unique
    //   title: "Portfolio using React.js",
    //   img: IMG4,
    //   description:
    //     "Personal website showcasing my passions, projects, and personality. Explore my journey through engaging content and interactive features.",
    //   technologies: "HTML | CSS | JavaScript | React.js | TypeScript",
    //   link: "https://subhranta-portfolio.vercel.app/",
    //   github: "https://github.com/Subhranta703/subhranta-portfolio",
    // },
    // {
    //   id: 5, // Unique id for the Weather App
    //   title: "Weather App",
    //   img: IMG3,
    //   description: "Responsive Weather app with weather forecast for real time and date, time showing in GMT. Enjoy seamless 7 Day's forecast. Built with JavaScript, React.js, Tailwind CSS.",
    //   technologies: "JavaScript | React.js",
    //   link: "https://github.com/Subhranta703/Weather_App",
    //   github: "https://weather-app-topaz-kappa.vercel.app/",
    // },
  ];
    
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
