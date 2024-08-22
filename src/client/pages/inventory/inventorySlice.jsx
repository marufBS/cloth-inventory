import { createSlice } from "@reduxjs/toolkit";

const inventorySlice = createSlice({
    name:'inventory',
    initialState:{
        inventoryActionType:""
    },
    reducers:{
        setInventoryActionType:((state,action)=>{
            state.inventoryActionType = action.payload
        })
    }
})

export const {setInventoryActionType} = inventorySlice.actions
export default inventorySlice.reducer