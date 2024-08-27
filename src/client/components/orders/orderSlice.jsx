import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
    name: 'order',
    initialState: {
        orderActionType: "",
        listUpdate: false,
    },
    reducers: {
        setOrderActionType: ((state, action) => {
            state.orderActionType = action.payload
        }),
        setListUpdate: ((state) => {
            state.listUpdate = !state.listUpdate
        }),
    }
})

export const { setOrderActionType,setListUpdate } = orderSlice.actions
export default orderSlice.reducer