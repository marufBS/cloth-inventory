import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
    name: 'order',
    initialState: {
        orderActionType: ""
    },
    reducers: {
        setOrderActionType: ((state, action) => {
            state.orderActionType = action.payload
        })
    }
})

export const { setOrderActionType } = orderSlice.actions
export default orderSlice.reducer