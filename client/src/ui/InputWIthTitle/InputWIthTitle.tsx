import { useState } from "react"
import styles from "./InputWIthTitle.module.scss"


interface IInputWIthTitle{
    query:string,
    setQuery:React.Dispatch<React.SetStateAction<string>>
    text:string
}


const InputWIthTitle:React.FC<IInputWIthTitle> = ({text,setQuery,query}) => {
    const [focus,setFocus] = useState(false)
    console.log(focus)
    return ( 
        <div className={`${styles.wrap} ${focus&&styles.active}`}>
            <p>
                {text}
            </p>
            <input
                placeholder="Type some text" 
                value={query} 
                onChange={(e)=>{setQuery(e.target.value)}}
                onFocus={()=>{setFocus(true)}}
                onBlur={()=>{setFocus(false)}}
                type="text"/>
        </div>
     );
}
 
export default InputWIthTitle;