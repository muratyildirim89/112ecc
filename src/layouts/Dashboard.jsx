import React from 'react';
import Navbar from "../components/Navbar";
import {Route} from "react-router-dom";
import Main from "./Main";
import Footer from "../components/Footer";
import About from "../components/About";
import HowCall from "./HowCall";
import Faq from "./Faq";
import Contacts from "./Contacts";

function Dashboard() {
    return (
        <div>
            <Navbar/>
            <Route exact path={"/"} component ={Main}/>
            <Route exact path={"/about"} component ={About}/>
            <Route exact path={"/how-call"} component ={HowCall}/>
            <Route exact path={"/faq"} component ={Faq}/>
            <Route exact path={"/contacts"} component ={Contacts}/>
            <Footer/>
        </div>
    );
}

export default Dashboard;