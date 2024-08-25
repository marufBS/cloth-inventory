import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState: {
        minify: false
    },
    reducers: {
        setMinify: ((state) => {
            state.minify = !state.minify
        })
    }
})

export const { setMinify } = sidebarSlice.actions
export default sidebarSlice.reducer