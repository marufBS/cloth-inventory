import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setListUpdate, setProduct_Id, setProductActionType, setProductName, setProductPrice, setProductStock, setProductURL } from "./productsSlice";
import { Card, CardBody, CardFooter, Image, Button,Divider } from "@nextui-org/react";
import { MdOutlineEdit, MdDeleteOutline } from "react-icons/md";
import { BsBoxes } from "react-icons/bs";
import { TbCurrencyTaka } from "react-icons/tb";

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
    const deletedProduct = await axios.delete(`/api/products/${id}`)
    dispatch(setListUpdate())
  }

  return (
    <div className="max-w-[900px] mx-auto">
      <div className="flex justify-end my-5">
        <Button
          // onPress={onOpen}
          onClick={handleProductCreate} className="mr-5">Add Product</Button>
      </div>
      <div className="flex flex-wrap justify-center gap-5 pb-4">
        {products.toReversed().map((item, index) => (
          <Card className="max-w-xs" shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="sm"
                radius="lg"
                alt={item.productName}
                className="w-[200px] object-cover h-[140px] rounded-b-none"
                src={item.productURL}
              />
            </CardBody>
            <CardFooter className="text-small flex flex-col gap-2">
              <div className="w-full flex justify-start">
                {item.productName}
              </div>
              <div className="flex flex-row w-full justify-evenly">
                <div className="flex flex-row justify-center items-center gap-2">
                  <div className="flex items-center">
                    <TbCurrencyTaka />{item.productPrice}
                  </div>
                  <div className="flex items-center gap-1">
                    <BsBoxes />{item.productStock}
                  </div>
                </div>
                <Divider orientation="vertical" className="mx-1" />
                <div className="flex flex-row justify-between">
                  <Button isIconOnly variant="light" color="danger" aria-label="delete" onClick={() => handleDeleteProduct(item._id)}><MdDeleteOutline size={20} /></Button>
                  <Button isIconOnly variant="light" color="secondary" aria-label="edit" onClick={() => handleEditProduct(item._id)}><MdOutlineEdit size={20} /></Button>
                </div>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
