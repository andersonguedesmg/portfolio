import React from 'react';
import About from '../../components/about/About';
import Contact from '../../components/contact/Contact';
import Education from '../../components/education/Education';
import Experience from '../../components/experience/Experience';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Project from '../../components/project/Project';
import Skill from '../../components/skill/Skill';

function Home() {
  return (
    <>
      <Header />
      <About />
      <Education />
      <Skill />
      <Experience />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
