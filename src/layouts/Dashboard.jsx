import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Dashboard() {
    return (
        <div>
            <Navbar/>
            Deneme
            {/*<Route exact path={"/"} component ={Main}/>*/}
            {/*<Route exact path={"/about"} component={About}/>*/}
            {/*<Route exact path={"/how-call"} component={HowCall}/>*/}
            {/*<Route exact path={"/faq"} component={Faq}/>*/}
            {/*<Route exact path={"/contacts"} component={Contacts}/>*/}
            <Footer/>
        </div>
    );
}

export default Dashboard;