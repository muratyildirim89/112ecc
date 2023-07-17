import React from 'react';
import Navbar from "../components/Navbar";
import {Route} from "react-router-dom";
import Main from "./Main";
import Footer from "../components/Footer";
import About from "../components/About";

function Dashboard() {
    return (
        <div>
            <Navbar/>
            <Route exact path="/" component={Main}/>
            <Route exact path="/about" component={About}/>
            <Footer/>
        </div>
    );
}

export default Dashboard;