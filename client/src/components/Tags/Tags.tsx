import React, { useEffect, useState } from "react";
import InputWIthTitle from "../../ui/InputWIthTitle/InputWIthTitle";
import MainButton from "../../ui/MainButton/MainButton";
import styles from "./Tags.module.scss"
import {BiSolidAddToQueue} from "react-icons/bi"
import RemovableElement from "../../ui/RemovableElement/RemovableElement";

interface ITgas{
    tags:string[],
    title:string;
    setTags: React.Dispatch<React.SetStateAction<string[]>>
}


const Tags:React.FC<ITgas> = ({tags,setTags,title}) => {
    const [tag,setTag] = useState("")
    function addTag(){
        if(tag.length){
            setTags([...tags,tag])
            setTag("")
        }
    }
    function removeTag(index:number){
        setTags(tags.filter((item,i)=>i!==index&&item))
    }
    return (
        <>
            <div className="">
                <div className={styles.addingArea}>
                    <InputWIthTitle 
                            text={title} 
                            query={tag} 
                            setQuery={setTag}/>      
                    <MainButton func={addTag}>
                        <BiSolidAddToQueue />  
                    </MainButton>        
                </div>
            </div>
            <div className={styles.tags}>
                {tags.map((item,index)=>{
                    return <RemovableElement index={index} func={removeTag}>{item}</RemovableElement>
                })}    
            </div>  
        </>        
     );
}
 
export default Tags;