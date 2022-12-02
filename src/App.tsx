import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GlobalStyle from './styles/globalStyles';
import Abouts from './components/Abouts';
import Schedule from './components/Schedule';
import Extra from './components/Extra';
import Memory from './components/Memory';
import Hurry from './components/Hurry';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
// import Speakers from './components/Speakers';
// import Tickets from './components/Tickets';
// import Location from './components/Location';
// import Newsletter from './components/Newsletter';
// import Sponsors from './components/Sponsors';

import { BrowserRouter as Router } from 'react-router-dom';
import { conferenceData, conferenceBoxes } from './data/conference';

// import { sponsorsData } from './data/sponsors';
// import { speakersData } from './data/speakers';

const App = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Router>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Hero />
      <Abouts />
      <Extra />
      <Schedule schedule={conferenceData} />
      <Memory speechs={conferenceBoxes} />
      {/* <Speakers speakers={speakersData} /> */}
      {/* <Tickets /> */}
      {/* <Location /> */}
      {/* <Newsletter /> */}
      {/* {<Sponsors sponsors={sponsorsData} /> */}
      <Hurry />
      <Footer />
    </Router>
  );
};

export default App;
