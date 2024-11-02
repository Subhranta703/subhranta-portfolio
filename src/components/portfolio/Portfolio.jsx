import "./portfolio.css";

import IMG1 from "../../assets/IMG1.png";
import IMG2 from "../../assets/IMG4.png";
<<<<<<< HEAD
import IMG3 from "../../assets/IMG2.png";
=======
import IMG3 from "../../assets/IMG2.jpg";
>>>>>>> master
import IMG4 from "../../assets/IMG3.png";
// import IMG5 from "../../assets/Jokes Project.jpg";
// import IMG6 from "../../assets/Project4.jpg";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "AI Image Generator with React.js",
      img: IMG1,
      description:
        "Empower your creativity with our React.js AI image generator, fueled by ChatGPT API, bringing imagination to life effortlessly.",
      technologies: "Html | CSS | Javascript | React. Js ",
      link: "https://ai-image-generation-seven.vercel.app/",
      github: "https://github.com/Subhranta703/Ai-Image-Generation",
    },
    {
      id: 2,
      title: "Music player ",
<<<<<<< HEAD
      img: IMG3,
      description:
        "Dedicated developer creating an ad-free music player using HTML, CSS, and JS, offering a seamless and enjoyable listening experience for all music enthusiasts. Enjoy your favorite tunes hassle-free!",
=======
      img: IMG2,
      description:
        "Dedicated developer creating an ad-free music player  offering a seamless and enjoyable listening experience for all music enthusiasts.",
>>>>>>> master
      technologies: "HTML | CSS | JavaScript | Tailwind css",
      link: "https://github.com/Subhranta703/Music-Player/deployments/github-pages",
      github: "https://github.com/Subhranta703/Music-Player",
    },
    {
      id: 3,
<<<<<<< HEAD
      title: "Shopping management System",
      img: IMG2,
      description: "Responsive online store with dynamic cart for fresh produce and household essentials. Enjoy seamless shopping. Built with JavaScript, HTML, CSS.",
      technologies: "HTML | CSS | JavaScript",
      link: "https://github.com/Subhranta703/shopping-management-system",
      github: "https://github.com/Subhranta703/shopping-management-system/deployments/github-pages",
    },
    
    {
      
        id: 4,
        title: "Portfolio using React.js",
        img: IMG4,
        description:
        "Personal website showcasing my passions, projects, and personality. Explore my journey through engaging content and interactive features.",
        technologies: "Html | CSS | Javascript | React. Js | Typescript",
        link: "https://subhranta-portfolio.vercel.app/",
        github: "https://github.com/Subhranta703/subhranta-portfolio",
      },
=======
      title: "Weather App",
      img: IMG3,
      description: "Responsive Weather app with weather forecast for real time  and date,time showing in GMT . Enjoy seamless 7 Day's forecast. Built with JavaScript, React.js, Tailwindcss.",
      technologies: "JavaScript | React.js ",
      link: "https://github.com/Subhranta703/Weather_App",
      github: "https://weather-app-topaz-kappa.vercel.app/",
    },
    
    // {
    //   
    //     id: 4,
    //     title: "Portfolio using React.js",
    //     img: IMG4,
    //     description:
    //       "Personal website showcasing my passions, projects, and personality. Explore my journey through engaging content and interactive features.",
    //     technologies: "Javascript | React. Js | Typescript",
    //     link: "https://subhranta-portfolio.vercel.app/",
    //     github: "https://github.com/Subhranta703/subhranta-portfolio",
    //   },
>>>>>>> master
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
<<<<<<< HEAD
                className="btn "
=======
                className="btn"
>>>>>>> master
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
<<<<<<< HEAD
                className="btn btn-primary"
=======
                className="btn btn-primary "
>>>>>>> master
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
