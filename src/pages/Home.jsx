import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Blogs from '../components/Blogs';
import Contact from '../components/Contact';

const Home = () => {
    return (
        <main>
            <Hero />
            <About />
            <Skills />
            <Services />
            <Projects />
            <Blogs />
            <Contact />
        </main>
    );
};

export default Home;
