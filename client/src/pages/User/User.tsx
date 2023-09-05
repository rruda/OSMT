import {useEffect} from 'react';
import styles from "./User.module.scss"
import { useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {getUserData} from "../../App/store/asyncthunks/userfetch"
import { AppDispatch, RootState } from '../../App/store/store';
import SkinList from '../../modules/List/SkinLIst';

const User:React.FC = () => {
    const param = useLocation()
    const dispatch = useDispatch<AppDispatch>()
    const paramUsername = useParams()
    useEffect(()=>{
    },[])
    return ( 
        <div className={styles.user}>
            <div className={styles.top}>
                <div className={styles.imgWrap}>
                    <img src="https://a.ppy.sh/27214431?1673384603.jpeg" alt="" />
                </div>
                <div className="">
                    <h2>doubleclick</h2>
                </div>
            </div>
            <SkinList list={["shdfh","dhffdg"]}/>

        </div>
     );
}
 
export default User;