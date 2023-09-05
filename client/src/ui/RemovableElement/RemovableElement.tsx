import React from "react";
import styles from "./RemovableElement.module.scss"
import {AiOutlineCloseCircle} from "react-icons/ai"


interface IRemovableElement{
    children:string,
    index:number,
    func:(index:number) => any,
}

const RemovableElement:React.FC<IRemovableElement> = ({children,func,index}) => {
    return ( 
        <div onClick={()=>{func(index)}} className={styles.element}>
            <div className={styles.remove}>
                <AiOutlineCloseCircle/>
            </div>
            <p>{children}</p>
        </div>
     );
}
 
export default RemovableElement;