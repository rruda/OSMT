import React, { PureComponent, useState } from 'react';
import styles from "./Skin.module.scss"
import { useParams } from 'react-router-dom';
import Imgs from './ui/Imgs';
import SkinInfo from '../../components/Infobox/InfoBox';
import { HiOutlineDownload } from 'react-icons/hi'
import { AiOutlineTags } from 'react-icons/ai'
import { BsCircle } from 'react-icons/bs'
import { AiOutlineUser } from 'react-icons/ai'
import { FaRegEye } from 'react-icons/fa'
import { BiLike,BiDislike, BiImages } from 'react-icons/bi'

import UserCart from '../../ui/UserCart/UserCart';





function Skin() {
    const d = useParams()
    const [imgs,setImgs] = useState<string[]>(["https://skimg.osuck.net/55bd720f34b2146decec11e6635396cf.webp","https://skimg.osuck.net/55bd720f34b2146decec11e6635396cf.webp","https://skimg.osuck.net/55bd720f34b2146decec11e6635396cf.webp","https://skimg.osuck.net/55bd720f34b2146decec11e6635396cf.webp","https://skimg.osuck.net/55bd720f34b2146decec11e6635396cf.webp","https://skimg.osuck.net/55bd720f34b2146decec11e6635396cf.webp","https://skimg.osuck.net/55bd720f34b2146decec11e6635396cf.webp","https://skimg.osuck.net/55bd720f34b2146decec11e6635396cf.webp"]);
    const [tags,setTags] = useState<string[]>(["purpel","fuzitron"])
    const [mods,setMods] = useState<string[]>(["std",])
    const [creators,setCreators] = useState<string[]>(["purple"])
    return (
        <div className={styles.skin}>

            <div className={styles.skin__header}>
                <h1>XD Fuzitron V1.0</h1>
                <span><HiOutlineDownload/>100</span>
                <span><FaRegEye/>100</span>
                <span><BiLike/>100</span>
                <span><BiDislike/>10000</span>
            </div>

            <div className={styles.skin__box}>
                <div className={styles.skin__img}>
                    <img src={imgs[0]} />
                </div>
            </div>
            <div className={styles.main}>
                <div className={styles.screenshots}>
                    <div className={styles.titleWrap}>
                        <BiImages/>
                        <h3>Screenshots</h3>
                    </div>
                    <div className={styles.skin__listImg}>
                        {imgs?.map((item,index)=>{
                            return <Imgs url={item}/>
                        })} 
                    </div>
                </div>
                <div className={styles.skin__info}>
                        <SkinInfo 
                            text="Download"
                            textExtra = {"10"}
                            color='rgb(22, 89, 148)' 
                            icon={<HiOutlineDownload/>}
                        />
                        <SkinInfo 
                            text="Tags" 
                            icon={<AiOutlineTags/>}
                            extraElement={<>{tags.map((item,index) => <div>{item}</div>)}</>}
                        />
                        <SkinInfo 
                            text="Mods" 
                            icon={<BsCircle/>}
                            extraElement={<>{mods.map((item,index) => <div>{item}</div>)}</>}
                        />
                        <SkinInfo 
                            text="Creators" 
                            icon={<AiOutlineUser/>}
                            extraElement={<UserCart  name='Purple' img ="https://m.media-amazon.com/images/I/51a5yOJi8CL._AC_UF894,1000_QL80_.jpg"/>}
                        />                    
                </div>
            </div>
            
        </div>
    );
}

export default Skin;