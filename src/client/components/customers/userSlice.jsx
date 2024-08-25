import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:{
        userData:{
            name:'Guest',
            avatar:"",
            email:"guest@gmail.com"
        },
        isUser:false
    },
    reducers:{
        setUser:((state,action)=>{
            state.userData = action.payload
        })
    }
})

export const {setUser} = userSlice.actions
export default userSlice.reducer