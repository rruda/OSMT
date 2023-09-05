import styles from "./Skin.module.scss"
import React, { PureComponent } from 'react';
import {Link,useParams} from "react-router-dom"

export interface ISkin{
    name:string
    img:string
}


function Skin() {
    const id = "adhalkhjk";
    return (
        <Link to = {`/skin/${id}`} className={styles.skin}>
            <div className={styles.skin_image}><img src="https://skimg.osuck.net/893891ae5f40713aa2c61c4f798566e5_sm.webp" alt="" /></div>
            <div className={styles.skin__box}>
                <div className="">XD Fuzitron V1.0</div>
                <div className={styles.line}></div>
                <div className={styles.skin__info}>
                    <div className="">
                        <div className=""><span>100</span></div>
                        <div className=""><span>100</span></div>
                    </div>
                    <div className=""><span>1h</span></div>
                </div>
            </div>
        </Link>
    );
}

export default Skin;