import React, { PureComponent, } from 'react';
import styles from "./Header.module.scss"
import { GiGlassBall } from "react-icons/gi";
import { Link,useNavigate} from 'react-router-dom';
import Login from './ui/Login';
import { useSelector } from 'react-redux';
import { IUserDataSlice } from '../../App/store/slices/UserDataSlice';
import { RootState } from '../../App/store/store';
import UserCart from '../../ui/UserCart/UserCart';
function Header(){
    const nav = useNavigate()
    const {username,avatar_url,loadingStatus} = useSelector((state:RootState) => state.UserData)
    return (
        <header className={styles.header}>
            <div>
                <div className={styles.header__left}>
                    <div className={styles.iconWraper}>
                        <GiGlassBall/>
                    </div>
                    <div className={styles.header__pages}>
                        <Link to = {"/skins"}>Skins</Link>
                        <Link to = {"/maps"}>Maps</Link>
                        <Link to = {"/tournaments"}>Tournaments</Link>
                    </div>
                </div>
                {loadingStatus === "ok"?<UserCart name={username} img={avatar_url}/>:<Login/>}
            </div>

        </header>
    );
}

export default Header;