import styles from "./SearchAndFilter.module.scss"
import SkinInfo, { ISkinInfo } from "../../components/Infobox/InfoBox";
import React, {useEffect, useState} from "react"
import { useNavigate, useLocation } from "react-router-dom";
import TextInput from "../../ui/TextInput/TextInput";
import { addSearchParams } from "../../helpers/addSerchParams";
import SearchParamsList, { ISearchParamsList } from "./components/SerchParsmsList";
import { IoIosClose, IoIosCloseCircle } from "react-icons/io";
 
export type paramsList  = ISearchParamsList & ISkinInfo
interface ISearchAndFilter{
    SearchParams:paramsList[] 
}


const SearchAndFilter:React.FC<ISearchAndFilter> = ({SearchParams}) => {

    const [query,setQuery] = useState<string>("")

    const ul = useLocation()
    const nav = useNavigate()

    function removeSearch(){
        SearchParams.forEach((item)=>{item.setElement("")})
        setQuery("")
    }
    
    useEffect(()=>{
        const params = {
            ...SearchParams.reduce((sum, current)=>{return {...sum,[current.text]:current.element}},{})
        };
        let url = new URL(
            "http://localhost:3000/skins"
        );
        url = addSearchParams(url,params)
        nav(url.search)
    },[...SearchParams.map((item)=>item.element),query])

    useEffect(()=>{
        nav(ul.search)
    },[])

    return ( 
        <div className={styles.wrap}>
            <div className={styles.head}>
                <h1>Search</h1>
                <IoIosClose onClick={removeSearch}/>
            </div>
            <TextInput query={query} setQuery={setQuery}/>
            <div className={styles.params}>
                {SearchParams.map((item)=>
                    <SkinInfo 
                    text={item.text} 
                    icon={item.icon}
                    color={item.color}
                    extraElement={<SearchParamsList 
                        arr={item.arr} 
                        element={item.element} 
                        setElement={item.setElement}
                    />}
                />                     
                )}
            </div>
        </div>
     );
}
 
export default SearchAndFilter;