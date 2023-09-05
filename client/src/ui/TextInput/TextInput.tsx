import React, { PureComponent } from 'react';
import styles from "./TextInput.module.scss"
interface ITextIput{
    query:string,
    setQuery:React.Dispatch<React.SetStateAction<string>>
}
const TextInput:React.FC<ITextIput> = ({query,setQuery})=>{
    return (
        <>
            <input value={query} onChange={(e)=>{setQuery(e.target.value)}} className={styles.input} type="text" />
        </>
    );
}

export default TextInput; 