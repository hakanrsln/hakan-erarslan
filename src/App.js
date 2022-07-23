import React from 'react';

import Nav from './components/nav/Nav';
import Header from './components/header/Header';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Testimoniols from './components/testimoniols/Testimoniols';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
     <Header />
     <Nav />
     <About />
     <Experience />
     <Services />
     <Portfolio />
     <Testimoniols />
     <Contact />
     <Footer />
    </>
  );
}

export default App;
