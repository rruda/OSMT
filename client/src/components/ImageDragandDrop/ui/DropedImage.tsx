import { BsFillTrashFill } from "react-icons/bs"
import styles from "./DropedImage.module.scss"

interface IDropedImage{
    file:string,
    index:number,
    arr:string[],
    setImages:React.Dispatch<React.SetStateAction<string[]>>
}

const DropedImage:React.FC<IDropedImage> = ({file,index,arr,setImages}) => {
    return (
        <div className={styles.wrap}>
            <div 
                onClick={()=>{
                    setImages(arr.filter((item,i)=>{
                            if(i!==index) return item
                        }))
                    }
                }  
                className="">
                <BsFillTrashFill/>
            </div>
            <img 
                key={index} 
                src={file}
            />          
        </div>
    )
}

 
export default DropedImage;