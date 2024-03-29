import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {Route} from "react-router-dom";
import About from "../components/About";
import HowCall from "./HowCall";
import Contacts from "./Contacts";
import Faq from "./Faq";
import Main from "./Main";

function Dashboard() {
    return (
        <div>
            <Navbar/>
            <Route exact path={"/"} component ={Main}/>
            <Route exact path={"/about"} component={About}/>
            <Route exact path={"/how-call"} component={HowCall}/>
            <Route exact path={"/faq"} component={Faq}/>
            <Route exact path={"/contacts"} component={Contacts}/>
            <Footer/>
        </div>
    );
}

export default Dashboard;