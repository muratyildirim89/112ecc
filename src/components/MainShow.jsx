import React, {useEffect, useState} from 'react';
import dataFiles from "../layouts/data.json";
import {useTranslation} from "react-i18next";

function MainShow() {

    const {t} = useTranslation();
    const [carouselItems, setCarouselItems] = useState([]);

    useEffect(() => {
        setCarouselItems(dataFiles)
    }, [])

    return (
        <div id="carouselExampleFade" className="carousel slide">
            <div className="carousel-inner" style={{height: "100%", overflow: "hidden"}}>
                {carouselItems.map(item => {
                    const isImage = item.type === 1;
                    const isActive = item.id === 1;

                    return (
                        <div key={item.id} className={`carousel-item ${isActive ? "active" : ""}`}>
                            {isImage ? (
                                <>
                                    <img
                                        src={item.url}
                                        className="d-block w-100"
                                        alt={item.caption}
                                        style={{ height: "100vh", objectFit: "cover", objectPosition: item.objectPosition }}
                                    />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h1 className={"d-inline-grid"} style={{border:"black", color:"white", textAlign:"center", background :"rgba(0,0,0,0.5)"}}>{t(item.head)}</h1>
                                        <p style={{border:"black", color:"white", textAlign:"center", backgroundColor:"rgba(0,0,0,0.5)"}}>{t(item.content)}</p>
                                    </div>
                                </>
                            ) : (
                                <video
                                    src={item.url}
                                    className="d-block w-100"
                                    controls
                                    style={{ height: "100vh" }}
                                />
                            )}
                        </div>
                    );
                })}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade"
                    data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade"
                    data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default MainShow;