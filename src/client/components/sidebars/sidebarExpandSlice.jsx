import { createSlice } from "@reduxjs/toolkit";

const sidebarExpandSlice = createSlice({
    name:'sidebarExpand',
    initialState:{
        minify:false
    },
    reducers:{
        setMinify:((state)=>{
            state.minify = !state.minify
        })
    }
})

export const {setMinify} = sidebarExpandSlice.actions
export default sidebarExpandSlice.reducer