import { createSlice } from '@reduxjs/toolkit';

export interface IImageWindow {
    img:string,
    isOpen:boolean,
}

const initialState:IImageWindow = {
    img:"",
    isOpen:false
}


const ImageWindowSlice = createSlice({
    name: 'counter',
    initialState,
    reducers:{
        open:(state,action)=>{
            state.img = action.payload
            state.isOpen = true
        },
        close:(state)=>{
            state.img = ""
            state.isOpen = false
        }
    }
})

export default ImageWindowSlice.reducer
export const {open, close} = ImageWindowSlice.actions