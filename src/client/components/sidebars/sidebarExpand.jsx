import React from 'react'
import { Accordion, AccordionItem, Divider, Listbox, ListboxItem } from '@nextui-org/react'
import { BsBoxes } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { RiFileList3Line } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import { setProductActionType } from '../../pages/products/productsSlice';
import { setCustomerActionType } from '../../pages/customer/customerSlice';
import { setInventoryActionType } from '../../pages/inventory/inventorySlice';
const SidebarExpand = () => {
    const isSidebarMinify = useSelector((state) => state.sidebarExpand.minify)


    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleRoute = (url) => {
        navigate(url)
        dispatch(setProductActionType(""))
        dispatch(setCustomerActionType(""))
        dispatch(setInventoryActionType(""))
    }
    return (
        <div className={`${isSidebarMinify?'w-[4%]':'w-[15%]'} border-r-1 border-default-200`}>
            <Listbox selectionMode='single' hideSelectedIcon classNames={{ list: `gap-2 h-[180px] text-2xl`}}>
                <ListboxItem startContent={<BsBoxes />} classNames={{ title: "text-xl" }} key="products" onClick={() => handleRoute("/products")}>
                    {
                        !isSidebarMinify && "Products"
                    }
                </ListboxItem>
                <ListboxItem startContent={<IoIosPeople />} classNames={{ title: "text-xl" }} key="customers" onClick={() => handleRoute("/customers")}>
                    {
                        !isSidebarMinify && "Customers"
                    }
                </ListboxItem>
                <ListboxItem startContent={<RiFileList3Line />} classNames={{ title: "text-xl" }} key="inventory" onClick={() => handleRoute("/inventory")}>
                    {
                        !isSidebarMinify && "Inventory"
                    }
                </ListboxItem>
            </Listbox>
        </div>
    )
}

export default SidebarExpand