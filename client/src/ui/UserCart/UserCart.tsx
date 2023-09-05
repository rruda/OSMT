import React, { PureComponent } from 'react';
import styles from "./UserCart.module.scss"
import { Link } from 'react-router-dom';
interface IUserCart{
    img:string,
    name:string,
}
const UserCart:React.FC<IUserCart> = ({img,name})=>{
    return (
        <Link className={styles.user} to={`/user/${name}`}>
            <img src={img} alt="" />
            <span>{name}</span>
        </Link>
    );
}

export default UserCart;