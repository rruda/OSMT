import React, { useState } from 'react';
import SkinList from '../../modules/List/SkinLIst';
import SearchAndFilter from '../../modules/SearchAndFilter/SearchAndFilter';
import { MdSort} from 'react-icons/md';
import { ISearchParamsList } from '../../modules/SearchAndFilter/components/SerchParsmsList';
import { ISkinInfo } from '../../components/Infobox/InfoBox';

import { HiArrowsUpDown } from 'react-icons/hi2';
import { BsCircle } from 'react-icons/bs';
import { FaRegKeyboard } from 'react-icons/fa';

type paramsList = ISearchParamsList & ISkinInfo 

function Skins() {
    const [mods,setMods] = useState<string[]>(["std","mania","ctb","taico"])
    const [sorts,setSorts] = useState<string[]>(["downloads","views","rating","date"])
    const [orders,setOrders] = useState<string[]>(["down","up",])

    const [sort,setSort] = useState<string>("")
    const [mod,setMod] = useState<string>("")
    const [query,setQuery] = useState<string>("")
    const [order,setOrder] = useState<string>("")
    const [traning,setTraning] = useState<string>("")
    // const arr = ["mod","order"].map((item)=>{
    //     const [elem,setElem] = useState()
    //     return setElem;
    // })

    function getRandomColor() {
        let letters = '12';
        let color = '#';
        for (let i = 0; i < 3; i++) {
          color += letters[Math.floor(Math.random() * 2)];
        }
        return color;
      }
     
    const SearchParams:paramsList[] = [
        {
            text:"Gememod",
            icon:<BsCircle/>,
            arr:mods,
            element:mod,
            setElement:setMod,
            color:getRandomColor()        
        },
        {
            text:"order",
            icon:<MdSort/>,
            arr:orders,
            element:order,
            setElement:setOrder,
            color:getRandomColor()                
        },
        {
            text:"sort",
            icon:<HiArrowsUpDown/>,
            arr:sorts,
            element:sort,
            setElement:setSort,
            color:getRandomColor()                     
        },
        {
            text:"training",
            icon:<FaRegKeyboard/>,
            arr:["reading","high-arr","farm","tournament"],
            element:traning,
            setElement:setTraning, 
        },
        {
            text:"mod",
            icon:<FaRegKeyboard/>,
            arr:["DT","HD","HR","FL","EZ","NM"],
            element:"value",
            setElement:setSort, 
        },
    ]

    const [listOfSkins,getListOfSkins] = useState([{name:"",img:""},{name:"",img:""},{name:"",img:""},{name:"",img:""},{name:"",img:""}])
    return (
        <>
            <SearchAndFilter SearchParams={SearchParams} />
            <SkinList list={listOfSkins}/>
        </>
    );
} 
export default Skins;