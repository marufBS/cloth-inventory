import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name:"product",
    initialState:{
        productName:"",
        productPrice:0,
        productURL:"",
        productQuantity:0,
        product_Id:"",
        listUpdate:false,
        productActionType:""
    },
    reducers:{
        setProductName:((state,action)=>{
            state.productName = action.payload
        }),
        setProductPrice:((state,action)=>{
            state.productPrice = action.payload
        }),
        setProductURL:((state,action)=>{
            state.productURL=action.payload
        }),
        setProductQuantity:((state,action)=>{
            state.productQuantity=action.payload
        }),
        setProduct_Id:((state,action)=>{
            state.product_Id=action.payload
        }),
        setListUpdate:((state)=>{
            state.listUpdate = !state.listUpdate
        }),
        setProductActionType:((state,action)=>{
            state.productActionType = action.payload
        })
    }
})

export const {setProductName,setProductPrice,setProductURL,setProductQuantity,setProduct_Id,setListUpdate,setProductActionType} = productSlice.actions
export default productSlice.reducer