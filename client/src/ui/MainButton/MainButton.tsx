import { Link } from "react-router-dom";
import styles from "./MainButton.module.scss"


interface IMainButton{
    children:React.ReactElement | string,
    func?:()=>any
}

const MainButton:React.FC<IMainButton> = ({children,func}) => {
    return ( 
        <button onClick={func} className={styles.button}>
            {children}
        </button>
     );
}
 
export default MainButton;