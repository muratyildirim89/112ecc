import React from 'react';
import "../assets/css/Contacts.css"

function Contacts() {
    return (
        <div className={"contacts"}>
            <div className={"left d-flex flex-column align-items-center"}>
                <img
                    src={"https://www.112.gov.tr/kurumlar/112.gov.tr/112Kurumsal/KurumsalKimlik/112-ACIL-LOGO_yeni.jpg"}
                    height={"400px"}
                    alt={"112-logo"}
                />
                <div className={"d-flex justify-content-left flex-column"}>
                    <h1>Ankara 112 Acil Çağrı Merkezi Müdürlüğü</h1>
                    <br/>
                    <div className={"d-flex justify-content-left flex-column"}>
                        <p className={"d-flex justify-content-left"}><b
                            style={{paddingRight: "50px", paddingBottom: "20px"}}>Adres </b>: Tanzimat Caddesi</p>
                        <p className={"d-flex justify-content-left"}><b
                            style={{paddingRight: "12px", paddingBottom: "20px"}}>Posta Kodu </b>: 06200 </p>
                        <p className={"d-flex justify-content-left"}><b
                            style={{paddingRight: "40px", paddingBottom: "20px"}}>Telefon </b>: 0 (312) 303 99 50</p>
                        <p className={"d-flex justify-content-left"}><b
                            style={{paddingRight: "68px", paddingBottom: "20px"}}>Fax </b>: 0 (312) 303 99 51</p>
                        <p className={"d-flex justify-content-left"}><b
                            style={{paddingRight: "30px", paddingBottom: "20px"}}>Web Site </b>: www.112ankara.gov.tr
                        </p>
                    </div>
                </div>
            </div>
            <div className={"right"}>
                <div style={{border: "1px solid black", height: "75%", width: "75%"}}>
                    {/*<MapsContainer/>*/}
                    Maps Area
                </div>
            </div>
        </div>
    );
}

export default Contacts;