import React from 'react';

import appCss from "../../../../../general_styles/appCss.module.css";
import headerCss from "./headerCss.module.css"
import Phone from "../../../../phone/phone";

const Header = () => {
    return <header className={headerCss.header}>
        <div className={appCss.container}>
            <div className={appCss.content}>
                <div className={headerCss.content}>
                    <h1>Покраска жидкими<br/>красками</h1>
                    <h2>Профессиональная покраска металлических<br/>конструкций</h2>
                    <Phone phoneNumber={"+7 (495) 000-00-00"}/>
                </div>
            </div>
        </div>
    </header>
}

export default Header;
