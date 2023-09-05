import * as React from 'react';
import styles from "./ImageWindow.module.scss"
import { IoIosCloseCircleOutline } from "react-icons/io"
import { useSelector,useDispatch } from 'react-redux'
import ImageWindowSlice, { close, open } from '../../store/ImageWindowSlice';
import { RootState } from '../../../../App/store/store';


interface IImageWindow{
    img:string
}
const ImageWindow:React.FC<IImageWindow> = ({img}) => {
    const dispatch = useDispatch()
	const isOpen = useSelector((state:RootState)=> state.ImageWindow.isOpen)
    function closeWindow(){
            dispatch(close())
    }
    return (
        <div className={styles.window}>
            <IoIosCloseCircleOutline onClick={closeWindow} className={styles.window__close}/>
            <img src={img} alt="" />
        </div>
    );
}
 
export default ImageWindow;