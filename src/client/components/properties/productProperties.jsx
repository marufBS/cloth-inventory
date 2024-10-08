import { Card, Divider, Textarea, Input, Button } from '@nextui-org/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setListUpdate, setProductActionType, setProductName, setProductPrice, setProductStock, setProductURL } from '../products/productsSlice'
import axios from 'axios'

const ProductProperties = () => {
  const dispatch = useDispatch()

  const productName = useSelector((state) => state.product.productName)
  const productPrice = useSelector((state) => state.product.productPrice)
  const productURL = useSelector((state) => state.product.productURL)
  const productStock = useSelector((state) => state.product.productStock)
  const product_Id = useSelector((state) => state.product.product_Id)
  const productActionType = useSelector((state)=> state.product.productActionType)

  useEffect(()=>{

  },[])


  const handleProduct = async () => {
    switch (productActionType) {
      case "add":
        console.log("adding")
        axios.post("/api/products", {
          productName, productPrice, productURL, productStock
        }).then((res) => {
          console.log(res)
          dispatch(setListUpdate())
        })
        return;
      case "edit":
        console.log("updating")
        const updateProduct = { productName, productPrice, productURL,productStock }
        const response = await axios.put(`/api/products/${product_Id}`, updateProduct)

        console.log(response)
        dispatch(setListUpdate())
        dispatch(setProductActionType(""))
        return
      default:
        return;
    }
  }
  return (
    <Card className='flex-1 rounded-none p-2'>
      <div className='text-center text-xl'>
        {productActionType==="edit"?'Update Product':'Add Product'}
      </div>
      <Divider className='my-2' />
      <div className='flex flex-col gap-5'>
        <Input
          aria-label="Product Name"
          isRequired
          type="text"
          label="Product Name"
          variant="bordered"
          placeholder='Enter product name'
          className="max-w-xs text-default-900"
          defaultValue={productName}
          value={productName}
          onChange={(e) => dispatch(setProductName(e.target.value))}
        />
        <Input
          aria-level="Product Price"
          isRequired
          type="text"
          label="Product Price"
          variant="bordered"
          placeholder='Enter product price'
          className="max-w-xs text-default-900"
          defaultValue={productPrice}
          value={productPrice}
          onChange={(e) => dispatch(setProductPrice(e.target.value))}
        />
        <Input
          aria-level="Product Stock"
          isRequired
          type="text"
          label="Product Stock"
          variant="bordered"
          placeholder='Enter product quantity'
          className="max-w-xs text-default-900"
          defaultValue={productStock}
          value={productStock}
          onChange={(e) => dispatch(setProductStock(e.target.value))}
        />
        <Textarea
          aria-label="Product URL"
          isRequired
          type="text"
          label="Product URL"
          variant="bordered"
          placeholder='Enter product URL'
          className="max-w-xs text-default-900"
          defaultValue={productURL}
          value={productURL}
          onChange={(e) => dispatch(setProductURL(e.target.value))}
        />
        <Button onClick={() => handleProduct()} onPress={handleProduct}>{productActionType==="edit"?'Update':'Add'}</Button>
      </div>
    </Card>
  )
}

export default ProductProperties