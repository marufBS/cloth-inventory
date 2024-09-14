import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setListUpdate, setProduct_Id, setProductActionType, setProductName, setProductPrice, setProductStock, setProductURL } from "./productsSlice";
import { Button } from "@nextui-org/react";



import ProductCard from "../productCard/productCard";

export default function Products() {
  const update = useSelector((state) => state.product.listUpdate)
  const [products, setProducts] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    axios.get('/api/products')
      .then((res) => {
        setProducts([...res.data])
      })

  }, [update])

  const handleProductCreate = () => {
    dispatch(setProductActionType("add"))
    dispatch(setProductName(""))
    dispatch(setProductPrice(""))
    dispatch(setProductURL(""))
    dispatch(setProductStock(""))
  }

  const handleEditProduct = (id) => {
    dispatch(setProductActionType("edit"))

    const response = products.filter((product) => product._id === id)
    const matchedProduct = response[0]

    dispatch(setProductName(matchedProduct.productName))
    dispatch(setProductPrice(matchedProduct.productPrice))
    dispatch(setProductStock(matchedProduct.productStock))
    dispatch(setProductURL(matchedProduct.productURL))
    dispatch(setProduct_Id(id))

  }

  const handleDeleteProduct = async (id) => {
    const deletedProduct = await axios.delete(`http://localhost:3000/api/products/${id}`)
    dispatch(setListUpdate())
  }

  function myFunction(a) {
    return a.splice(a.length-3,3)
  }

  console.log(myFunction("maruf"))
  return (
    <div className="max-w-[900px] mx-auto">
      <div className="flex justify-end my-5">
        <Button
          // onPress={onOpen}
          onClick={handleProductCreate} className="mr-5">Add Product</Button>
      </div>
      <div className="flex flex-wrap justify-center gap-5 pb-4">
        {products.toReversed().map((item, index) => (
          <ProductCard
            key={index}
            item={item}
            handleDeleteProduct={handleDeleteProduct}
            handleEditProduct={handleEditProduct} />
        ))}
      </div>
    </div>
  );
}
