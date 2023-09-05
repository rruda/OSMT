import React, { PureComponent } from 'react';
import styles from "./Footer.module.scss"
import { GiGlassBall } from "react-icons/gi";
import { Link } from 'react-router-dom';
function Footer(){
    return (
        <footer className={styles.header}>
            <div className="">
                <span>created by Rula and Fuzitron </span>
            </div>
        </footer>
    );
}

export default Footer;