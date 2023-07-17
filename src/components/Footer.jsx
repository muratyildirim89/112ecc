import React from "react";
import {useTranslation} from "react-i18next";

export default function Footer() {

    const {t} = useTranslation();

    return (
        <div className={"footer text-center mt-3 bottom-0"}>
            {new Date().getFullYear()}© {t("All Rights Reserved")}. {t("Ankara 112 Acil Çağrı Merkezi")}
        </div>
    );
}