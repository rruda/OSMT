import { SerializedError, createSlice } from '@reduxjs/toolkit';
import { getUserData } from '../asyncthunks/userfetch';

export interface IUserDataSlice {
    avatar_url:string,
    username:string,
    skins:any[],
    maps:any[],
    loadingStatus:string,
    error:SerializedError | null
}

const initialState:IUserDataSlice = { 
    avatar_url:"",
    username:"",
    skins:[],
    maps:[],
    loadingStatus:"",
    error:null
}


const UserDataSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{

    },
    extraReducers:(builder) => {
        builder.addCase(getUserData.fulfilled, (state,action) => {
            console.log(`fulfilled:${action}`)
            state.avatar_url = action.payload.avatar_url
            state.username = action.payload.username
            state.loadingStatus = "ok"
            state.error = null
        })
        builder.addCase(getUserData.pending, (state,action) => {
            state.loadingStatus = "loading"
            state.error = null
        })
        builder.addCase(getUserData.rejected, (state,action) => {
            state.loadingStatus = "failed"
            state.error = action.error;
        })
    } 
})

export default UserDataSlice.reducer
export const {} = UserDataSlice.actions