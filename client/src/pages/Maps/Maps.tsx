import {useState} from 'react';

import TextInput from "../../ui/TextInput/TextInput";
import styles from "./Maps.module.scss"
import SearchAndFilter, { paramsList } from '../../modules/SearchAndFilter/SearchAndFilter';
import { FaRegKeyboard } from 'react-icons/fa';
function Maps() {
    const [value,setValue] = useState<string>("")
    const SearchParams:paramsList[] = []
    return (
        <div className={styles.wrap}>
            <SearchAndFilter SearchParams={SearchParams}/>
        </div>
    );
}

export default Maps;