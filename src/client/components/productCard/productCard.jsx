import React from 'react'
import { Button, Card, CardBody, CardFooter, Divider, Image } from '@nextui-org/react'
import { MdOutlineEdit, MdDeleteOutline } from "react-icons/md";
import { TbCurrencyTaka } from "react-icons/tb";
import { BsBoxes } from "react-icons/bs";


const ProductCard = ({ item, handleDeleteProduct, handleEditProduct, showEdit = true, showDelete = true }) => {
    return (
        <Card className="max-w-xs" shadow="sm" isPressable onPress={() => console.log("item pressed")}>
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
                <div className={`flex flex-row w-full justify-evenly`}>
                    <div className="w-full flex flex-row justify-between items-center gap-2">
                        <div className="flex items-center">
                            <TbCurrencyTaka />{item.productPrice}
                        </div>
                        <div className="flex items-center gap-1">
                            <BsBoxes />{item.productStock}
                        </div>
                    </div>
                    {(showDelete || showEdit) && <Divider orientation="vertical" className="mx-1" />}

                    <div className="flex flex-row justify-between">
                        {showDelete && <Button isIconOnly variant="light" color="danger" aria-label="delete" onClick={() => handleDeleteProduct(item._id)}><MdDeleteOutline size={20} /></Button>}
                        {showEdit && <Button isIconOnly variant="light" color="secondary" aria-label="edit" onClick={() => handleEditProduct(item._id)}><MdOutlineEdit size={20} /></Button>}

                    </div>
                </div>
            </CardFooter>
        </Card>
    )
}

export default ProductCard