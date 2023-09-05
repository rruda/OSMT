import React from "react";
export interface ISearchParamsList{
    arr:string[],
    element:string,
    setElement:React.Dispatch<React.SetStateAction<string>>
}

const SearchParamsList:React.FC<ISearchParamsList> = ({arr,element,setElement}) => {
    return ( 
        <>
            {arr.map((item,index) => 
            <a 
                style={element == item ?{color:"rgba(255,255,255,0.9)"}:{}}
                onClick={()=> setElement(item)}>{item}
            </a>)}
        </>
            
     );
}
 
export default SearchParamsList;