import React from 'react';
import Navbar from "../components/Navbar";
import {Route, Routes} from "react-router-dom";
import Main from "./Main";
import About from "../components/About";

function Dashboard() {
    return (
        <div>
            <Navbar/>
            <Routes>
                <Route exact path={"/"} component={Main}/>
                <Route exact path={"/about"} component={About}/>
            </Routes>


        </div>
    );
}

export default Dashboard;