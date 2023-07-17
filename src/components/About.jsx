import React from 'react';
import "../assets/css/About.css"
import {useTranslation} from "react-i18next";

function About() {

    const {t} = useTranslation();

    return (<div className={"about"}>
        {t("In our country, requests and notifications for assistance are received from various institutions such as 155-156-158-110-112-177 etc. emergency calls are made. However, it is known that there are difficulties in the implementation of emergency aid numbers due to the variety and number of them. In addition, loss of life and property may occur, as well as wasting time and resources, due to hesitation about which institution or institutions the incident is related to or which priority it is, and due to the need to call separate numbers even if all contact phones are known in the face of an incident involving several institutions. In Western countries, emergency services such as security, health and fire are coordinated from a single center, and 112 in the European Union member countries is used as the 911 emergency help line in America. With its decision dated 29 July 1991, the European Union envisaged the use of the 112 line as the 'Single European Emergency Call Number' in all countries under the umbrella of the union. In the process of harmonization with the European Union, efforts to create a 'Single Emergency Call Number' in our country; In 2003, the Dutch Government and T.C. It was started within the scope of MATRA Projects with the cooperation of the Ministry of Interior, and Antalya was designated as a Pilot Province on 06 April 2005. The 112 emergency call center system has two main purposes and functions")};
        <br/>

        {<span className="material-symbols-rounded">
            chevron_right
        </span>}
        {t("In case of making an emergency call, our citizens learn a single number instead of multiple numbers")}.
        <br/>

        {<span className="material-symbols-rounded">
            chevron_right
        </span>}

        {t("Reaching the scene of the incident or the emergency person as soon as possible after the emergency call is received")}.
    </div>);
}

export default About;