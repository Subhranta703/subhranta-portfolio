import React from 'react';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
// import Testimonials from './components/testimonials/Testimonials';
import Topbar from './components/topbar/Topbar';
import Work from './components/work/Work'; // Ensure this path is correct

const App = () => {
  return (
    <>
      <Header />
      <Topbar />
      <Intro />
      <Experience />
      <Work />
      <Portfolio />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </>
  );
};

export default App;
