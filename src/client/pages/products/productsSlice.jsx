import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name:"product",
    initialState:{
        productName:"",
        productPrice:"",
        productURL:"",
        product_Id:"",
        listUpdate:false
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
        setProduct_Id:((state,action)=>{
            state.product_Id=action.payload
        }),
        setListUpdate:((state)=>{
            state.listUpdate = !state.listUpdate
        })
    }
})

export const {setProductName,setProductPrice,setProductURL,setProduct_Id,setListUpdate} = productSlice.actions
export default productSlice.reducer