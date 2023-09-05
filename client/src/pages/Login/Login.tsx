import {useEffect} from 'react';

import { useLocation, useParams,Navigate, Route} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {getUserData} from "../../App/store/asyncthunks/userfetch"
import { AppDispatch, RootState } from '../../App/store/store';

const Login:React.FC = () => {
    const param = useLocation()
    const dispatch = useDispatch<AppDispatch>()
    const paramUsername = useParams()
    const {} = useSelector((state:RootState) => state.UserData)
    useEffect(()=>{
            dispatch(getUserData(param.search))
    },[])
    return ( 
        <div>
            <Navigate to="/skins" /> 
        </div>
     );
}
 
export default Login;