import React, { PureComponent, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from "react-redux"
import { open } from '../store/ImageWindowSlice';

interface IImgs{
    url: string
}

const Imgs:React.FC<IImgs> = ({url})=>{
    const dispatch = useDispatch()
    function openWindow(){
        dispatch(open(url))
        window.scrollTo({top: window.scrollX ,left: 0})
    }
    return (
        <div className="" style={{cursor:"pointer"}}>
            <img onClick={openWindow} src={url} alt="" />
        </div>
    );
}

export default Imgs; 