import { useState } from "react";
import styles from "./ImageDragandDrop.module.scss"
import { BsDropbox } from "react-icons/bs";
import { iamgeValidaion } from "./helpers/validation";
import DropedImage from "./ui/DropedImage";


const ImageDragandDrop = () => {

    const [drop,setDrop] = useState(false)
    const [images,setImages] = useState<string[]>([])

    function loadImages(file:File[]){
        iamgeValidaion(file).forEach((i)=>{
            
            let reader = new FileReader()
            reader.onload  = function() {
                var dataURL = this.result;
                // @ts-ignore
                setImages((prev)=>[...prev,dataURL])
            }
            reader.readAsDataURL(i)
        })
    }
    function getSelectedFile(e:React.ChangeEvent<HTMLInputElement>){
        //@ts-ignore
        loadImages([...e.target.files])
    }
    function dragStartHandler(e:React.DragEvent<HTMLDivElement>){
        e.preventDefault()
        setDrop(true)
    }
    function dragLeaveHandler(e:React.DragEvent<HTMLDivElement>){
        e.preventDefault()
        setDrop(false)
    }
    function dragDropHandler(e:React.DragEvent<HTMLDivElement>){
        e.preventDefault()
        setDrop(false)
        const files = [...e.dataTransfer.files]
        loadImages(files)
    }

    return (
        <>
            <div                    
                onDragStart={e => {dragStartHandler(e)}}
                onDragLeave={e => {dragLeaveHandler(e)}}
                onDragOver={e => {dragStartHandler(e)}}
                onDrop={e => {dragDropHandler(e)}} 
                className={`${styles.wrap} ${drop&&styles.drop}`}>
                    <BsDropbox/>
                    <p>Drag and drop images here</p>
                    <p>or</p>
                    <label className={styles.button} htmlFor="files">select images</label>
                    <input 
                        onChange={(e)=>{getSelectedFile(e)}} 
                        id="files" 
                        style={{visibility:"hidden"}} 
                        type='file' 
                        multiple
                    />
            </div>
            <div className={styles.images}>
                        {images.map((i,index,arr)=>{
                            return <DropedImage 
                                index={index} 
                                file={i} 
                                arr={arr} 
                                setImages={setImages}/>
                            })
                        }
            </div>        
        </>
    );
}
 
export default ImageDragandDrop;