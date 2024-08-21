import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardBody, CardFooter, Image, Button, useDisclosure } from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineEdit, MdDeleteOutline } from "react-icons/md";
import { setListUpdate, setProduct_Id, setProductName, setProductPrice, setProductQuantity, setProductURL } from "./productsSlice";
import ProductModal from "../../components/modals/productModal";
import { BsBoxes } from "react-icons/bs";

export default function Products() {
  const mainHeight = useSelector((state) => state.app.mainHeight)
  const update = useSelector((state) => state.product.listUpdate)
  const [products, setProducts] = useState([])
  const [modalType, setModalType] = useState("add")

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const dispatch = useDispatch()

  useEffect(() => {
    axios.get('http://localhost:3000/api/products')
      .then((res) => {
        setProducts([...res.data.products])
      })

  }, [update])

  const handleProductCreate = () => {
    setModalType("add")
    dispatch(setProductName(""))
    dispatch(setProductPrice(""))
    dispatch(setProductURL(""))
    dispatch(setProductQuantity(""))
  }

  const handleEditProduct = (id) => {
    onOpen()
    setModalType("edit")

    const response = products.filter((product) => product._id === id)
    const matchedProduct = response[0]

    dispatch(setProductName(matchedProduct.productName))
    dispatch(setProductPrice(matchedProduct.productPrice))
    dispatch(setProductURL(matchedProduct.productURL))
    dispatch(setProductQuantity(matchedProduct.productQuantity))
    dispatch(setProduct_Id(id))

  }

  const handleDeleteProduct = async (id) => {
    const deletedProduct = await axios.delete(`http://localhost:3000/api/products/${id}`)
    console.log(deletedProduct)
    dispatch(setListUpdate())
  }

  return (
    <div className="max-w-[900px] mx-auto">
      <div className="flex justify-end my-5">
        <Button onPress={onOpen} onClick={handleProductCreate} className="mr-5">Add Product</Button>
      </div>
      <div className="flex flex-wrap justify-center gap-5 pb-4">
        {products.map((item, index) => (
          <Card className="max-w-xs" shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="sm"
                radius="lg"
                // width="100%"
                alt={item.productName}
                className="w-[200px] object-cover h-[140px]"
                src={item.productURL}
              />
            </CardBody>
            <CardFooter className="text-small flex flex-col gap-2">
              <div className="w-full flex justify-start">
                {item.productName}
              </div>
              <div className="flex flex-col w-full">
                <div className="flex flex-row justify-end">
                  <div className="flex gap-5">
                    <p className="text-default-500"><span className="text-xl">৳ </span>{item.productPrice}</p>
                    <div className="flex items-center gap-1">
                      <BsBoxes />{item.productQuantity}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-between w-full">
                <Button isIconOnly variant="light" color="danger" onClick={() => handleDeleteProduct(item._id)}><MdDeleteOutline size={20} /></Button>
                <Button isIconOnly variant="light" color="secondary" onClick={() => handleEditProduct(item._id)}><MdOutlineEdit size={20} /></Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>

      <ProductModal isOpen={isOpen} modalType={modalType} onOpenChange={onOpenChange} />
    </div>
  );
}
