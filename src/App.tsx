import React from "react";
import Hero from "./components/Hero";
import GlobalStyle from "./styles/globalStyles";
import About from "./components/About";
import Speakers from "./components/Speakers";
import Schedule from "./components/Schedule";
import Extra from "./components/Extra";
import Memory from "./components/Memory";
import Tickets from "./components/Tickets";
import Location from "./components/Location";

const App = () => {
    return (
        <>
            <GlobalStyle />
            <Hero />
            <About />
            <Extra />
            <Schedule />
            <Memory />
            <Speakers />
            <Tickets />
            <Location />
        </>
    );
};

export default App;
