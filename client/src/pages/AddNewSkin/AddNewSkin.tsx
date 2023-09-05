import NewSkinSettings from "../../modules/NewSkinSettings/NewSkinSettings";
import styles from "./AddNewSkin.module.scss";


const AddNewSkin = () => {
    return (
        <div className={styles.warp}>
            <NewSkinSettings/>
        </div>
    );
}
 
export default AddNewSkin;