import React, {useState} from 'react';
import "../assets/css/Information.css"
import {Link, useHistory} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {classNames} from "../utilities/utils";

function InfoArea() {
     const history = useHistory();
    
     const {t} = useTranslation();
     const [activeTab] = useState(history.location.pathname);
    
     return (<div className={"area text-center"}>
         {t("When should we call the emergency line")}?
    
         <div className={"contents"}>
             <div className="row">
                 <div className="col">
                     <span className="material-symbols-rounded">local_police</span>
                 </div>
                 <div className="col col-colored">
                     {t("Police")}
                     <div className={"button-style"}>
                         <Link to="/how-call" className={classNames({
                             "nav-link": true,
                             "active": activeTab === "/how-call",
                             "link-dark": activeTab !== "/how-call"
                         })}>
                             {t("When To Call")}?
                         </Link>
                     </div>
                 </div>
                 <div className="col">
                     <span className="material-symbols-rounded">ambulance</span>
                 </div>
                 <div className="col col-colored">{t("Ambulance")}
                     <div className={"button-style"}>
                         <Link to="/how-call" className={classNames({
                             "nav-link": true,
                             "active": activeTab === "/how-call",
                             "link-dark": activeTab !== "/how-call"
                         })}>
                             {t("When To Call")}?
                         </Link>
                     </div>
                 </div>
             </div>
             <div className="row">
                 <div className="col col-colored">{t("Fire Department")}
                     <div className={"button-style"}>
                         <Link to="/how-call" className={classNames({
                             "nav-link": true,
                             "active": activeTab === "/how-call",
                             "link-dark": activeTab !== "/how-call"
                         })}>
                             {t("When To Call")}?
                         </Link>
                     </div>
                 </div>
                 <div className="col">
                     <span className="material-symbols-rounded">fire_truck</span>
                 </div>
                 <div className="col col-colored">{t("Forest Department")}
                     <div className={"button-style"}>
                         <Link to="/how-call" className={classNames({
                             "nav-link": true,
                             "active": activeTab === "/how-call",
                             "link-dark": activeTab !== "/how-call"
                         })}>
                             {t("When To Call")}?
                         </Link>
                     </div>
                 </div>
                 <div className="col">
                     <span className="material-symbols-rounded">forest</span>
                 </div>
             </div>
             <div className="row">
                 <div className="col">
                     <span className="material-symbols-rounded">earthquake</span>
                 </div>
                 <div className="col col-colored">{t("Disaster")}
                     <div className={"button-style"}>
                         <Link to="/how-call" className={classNames({
                             "nav-link": true,
                             "active": activeTab === "/how-call",
                             "link-dark": activeTab !== "/how-call"
                         })}>
                             {t("When To Call")}?
                         </Link>
                     </div>
                 </div>
                 <div className="col">
                     <span className="material-symbols-rounded" style={{fontSize: "4vw"}}>emergency_share vaccines emergency</span>
                 </div>
                 <div className="col col-colored">{t("Coordination")}
                     <div className={"button-style"}>{t("How To Use")}?</div>
                 </div>
             </div>
         </div>
     </div>);
}

export default InfoArea;