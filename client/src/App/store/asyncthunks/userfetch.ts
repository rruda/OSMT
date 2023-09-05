import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const authUser = createAsyncThunk(
    "user/authUser",
    async (code:string) => {
        const res = await axios.get("http://localhost:5000/api/oAuth")
        console.log(res.data)
        return res.data;
    }
)

export const getUserData = createAsyncThunk(
    "user/getData",
    async (code:string) => {
        const res = await axios.get(`http://localhost:5000/api/oAuth/callback${code}`)
        console.log(res.data)
        return res.data;
    }
)