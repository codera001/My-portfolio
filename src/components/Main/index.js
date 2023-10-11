import React from "react";
import Home from "../Home";
import About from "../About";
import Contact from "../Contact";
import Resume from "../Resume";
import Portfolio from "../Portfolio";
import Sidebar from "../Sidebar";


const Main = () => {
    return(
        <>
        <Sidebar/>
        <Home/>
        <About/>
        <Resume/>
        <Portfolio/>
        <Contact/>
        </>
    )
}

export default Main;