import React, {useState} from 'react';
import {Link} from "react-router-dom";
import logo from "../assets/images/red.jpg"
import "../assets/css/Navbar.css"
import {useTranslation} from "react-i18next";
import trFlag from "../assets/images/flags/4x3/tr.svg"
import usFlag from "../assets/images/flags/4x3/gb.svg"
import {Icon} from "semantic-ui-react";

function Navbar() {

    const {t, i18n} = useTranslation();
    const [language, setLanguage] = useState(i18n.language);

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang).then(() => setLanguage(lang))
    };

    return (
        <div style={{marginBottom:"7.5vh"}}>
            <nav className={"navbar navbar-expand-lg fixed-top navbar-dark"}>
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        <img src={logo} alt="112-logo" width="30" className="d-inline-block align-text-top"
                             style={{marginRight: "8px"}}/>
                        Ankara 112 Acil Çağrı Merkezi
                    </Link>

                    {/*<a className="navbar-brand" style={{cursor:"pointer"}} onClick={() => history.push("/")}>*/}
                    {/*    <img src={logo} alt={"Logo"} width={"30"} className="d-inline-block align-text-top"/>*/}
                    {/*    &nbsp;Ankara 112 Acil Çağrı Merkezi</a>*/}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to={"/about"} className={"nav-link"}>
                                    <Icon name="sitemap" size="big" className="mb-2 me-2"/>
                                    {t("About Number 112")}
                                </Link>
                                {/*<a className="nav-link" aria-current="page" href="https://ornek.com">*/}
                                {/*    </a>*/}
                            </li>
                            <li className="nav-item dropdown">
                                <Link className={"nav-link dropdown-toggle"} role="button" data-bs-toggle="dropdown"
                                      aria-expanded="false" >
                                    <Icon name={"phone"} size={"big"} className={"mb-2 me-2"}/>
                                    {t("Calling Number 112")}
                                </Link>


                                {/*<a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown"*/}
                                {/*   aria-expanded="false" href="https://ornek.com">*/}
                                {/*    <Icon name={"phone"} size={"big"} className={"mb-2 me-2"}/>*/}
                                {/*    {t("Calling Number 112")}*/}
                                {/*</a>*/}
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link to={"/how-call"} className="dropdown-item">{t("How to call 112")}</Link>
                                        {/*<a className="dropdown-item" href="https://ornek.com">{t("How to call 112")}</a>*/}
                                    </li>
                                    <li>
                                        <Link to={"/how-call"} className="dropdown-item">{t("When to call 112")}</Link>
                                    </li>
                                    <li>
                                        <Link to={"/how-call"} className="dropdown-item">{t("When not to call 112")}</Link>
                                    </li>
                                    <li>
                                        <Link to={"/how-call"} className="dropdown-item">{t("What to expact when calling 112")}?</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link to={"/faq"} className="nav-link" aria-current="page">
                                    <Icon name={"comments"} size={"big"} className={"mb-2 me-2"}
                                          style={{display: "inline"}}/>
                                    {t("FAQ")}
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/contacts"} className="nav-link" aria-current="page">
                                    <Icon name={"paper plane"} size={"big"} className={"mb-2 me-2"}/>
                                    {t("Contacts")}
                                </Link>
                            </li>
                        </ul>
                        {language !== "tr" ?
                            <ul className="top-navbar-language-selection" style={{cursor:"pointer"}} onClick={() => changeLanguage("tr")}>
                                <img src={trFlag} className="d-inline float-start rounded m-1 me-2" alt="TR Flag"
                                     style={{width: 25, border:"black 1px solid"}}/>
                                <span>Türkçe</span>
                            </ul>
                            :
                            <ul className="top-navbar-language-selection" style={{cursor:"pointer"}} onClick={() => changeLanguage("en")}>
                                <img src={usFlag} className="d-inline float-start rounded m-1 me-2" alt="USA Flag"
                                     style={{width: 25, border:"black 1px solid"}}/>
                                <span>English</span>
                            </ul>
                        }
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;