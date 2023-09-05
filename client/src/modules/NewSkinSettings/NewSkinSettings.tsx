import ImageDragandDrop from "../../components/ImageDragandDrop/ImageDragandDrop";
import InfoBox from "../../components/Infobox/InfoBox";
import Tags from "../../components/Tags/Tags";
import InputWIthTitle from "../../ui/InputWIthTitle/InputWIthTitle";
import styles from "./NewSkinSettings.module.scss"
import {useState} from "react"
import {BsYoutube} from "react-icons/bs"
import {AiFillRedditCircle} from "react-icons/ai"
import TextInput from "../../ui/TextInput/TextInput";
import { HiDownload } from "react-icons/hi";
import { BiCircle } from "react-icons/bi";

const NewSkinSettings = () => {
    const [title,setTitle] = useState("")
    const [version,setVersion] = useState("V1")
    const [tags,setTags] = useState<string[]>([])
    const [youTube,setYouTube] = useState<string>("")
    const [size,setSize] = useState(0)
    const [nsvw,setNsvw] = useState(false)



    return ( 
        <div className={styles.wrap}>
            <div className={styles.naming}>
                <InputWIthTitle 
                    text="Version" 
                    query={version} 
                    setQuery={setVersion}/>
                <InputWIthTitle 
                    text="Skin name" 
                    query={title} 
                    setQuery={setTitle}/>
            </div>
            <ImageDragandDrop/>
            <Tags title="Tags" tags={tags} setTags={setTags}/>
            <Tags title="Creators" tags={tags} setTags={setTags}/>
            <div className={styles.links}>
                <InfoBox
                    text="Download"
                    icon={<HiDownload/>}
                    color="#33542a"
                    extraElement={<TextInput setQuery={setYouTube} query={youTube} />}
                />
                <InfoBox
                    text="YouTube Link"
                    icon={<BsYoutube/>}
                    color="#ad3b3b"
                    extraElement={<TextInput setQuery={setYouTube} query={youTube} />}
                />
                <InfoBox
                    text="Forum post"
                    icon={<BiCircle/>}
                    color="#91567e"
                    extraElement={<TextInput setQuery={setYouTube} query={youTube} />}
                />
                <InfoBox
                    text="Reddit post"
                    icon={<AiFillRedditCircle/>}
                    color="#b56219"
                    extraElement={<TextInput setQuery={setYouTube} query={youTube} />}
                />                                                    
            </div>

        </div>
     );
}
 
export default NewSkinSettings;