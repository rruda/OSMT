import * as React from 'react';
import Skin, { ISkin } from '../../components/Skin/Skin';
import styles from "./SkinLIst.module.scss";
import { BsCardList } from 'react-icons/bs';
import AddButton from '../../ui/AddButton/AddButton';

export interface IListOfSkins{
    list:any[]
}

const SkinList:React.FC<IListOfSkins> = ({list}) => {
    return (
        <div className={styles.skins}>
            <div className={styles.skins__text}>
                <div className={styles.flex}>
                    <BsCardList/>
                    <h2>Skins</h2>
                </div>
                <AddButton>add new</AddButton>
            </div>
            <div className={styles.skins__body}>
                {list.map((_,index)=><Skin key={index}/>)}
            </div>                
        </div> 
    );
}
 
export default SkinList;