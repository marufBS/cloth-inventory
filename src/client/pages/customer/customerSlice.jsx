import { createSlice } from "@reduxjs/toolkit";

const customerSlice = createSlice({
    name:"customer",
    initialState:{
        customerName:"",
        customerId:"",
        customerAddress:"",
        customerAvatar:"",
        customer_Id:"",
        listUpdate:false,
        customerActionType:""
    },
    reducers:{
        setCustomerName:((state,action)=>{
            state.customerName = action.payload
        }),
        setCustomerId:((state,action)=>{
            state.customerId = action.payload
        }),
        setCustomerAddress:((state,action)=>{
            state.customerAddress= action.payload
        }),
        setCustomer_Id:((state,action)=>{
            state.customer_Id = action.payload
        }),
        setListUpdate:((state)=>{
            state.listUpdate = !state.listUpdate
        }),
        setCustomerActionType:((state,action)=>{
            state.customerActionType = action.payload
        })
    }
})

export const {setCustomerName,setCustomerId,setCustomerAddress,setCustomer_Id,setListUpdate,setCustomerActionType} = customerSlice.actions
export default customerSlice.reducer