import { Link } from "react-router-dom";
import styles from "./AddButton.module.scss"


interface IAddButton{
    children:React.ReactElement | string,
}

const AddButton:React.FC<IAddButton> = ({children}) => {
    return ( 
        <Link to={"addnew"} className={styles.button}>
            {children}
        </Link>
     );
}
 
export default AddButton;