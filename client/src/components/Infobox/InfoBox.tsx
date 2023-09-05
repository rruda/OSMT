import React, { PureComponent, ReactComponentElement, ReactElement } from 'react';
import styles from "./InfoBox.module.scss";
export interface ISkinInfo{
    icon:ReactElement,
    text:string,
    textExtra?:ReactElement | string,
    color?:string,
    extraElement?:ReactElement,
    url?:string,
}
const InfoBox:React.FC<ISkinInfo> = ({icon,text,extraElement,textExtra,color = "rgba(110, 110, 110)",url}) => {
    return (
        <div className={styles.info__wrap} style={{backgroundColor:color}} >
            <div className={styles.info}>
                {icon}<div className={styles.info__text}><a href={url}><span>{text}</span></a></div>
            </div>
            {extraElement&&<div className={styles.info__extra}>{extraElement}</div>}
        </div>
     );
}
 
export default InfoBox;