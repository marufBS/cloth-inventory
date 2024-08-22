import React from 'react'
import { Accordion, AccordionItem, Divider, Listbox, ListboxItem } from '@nextui-org/react'
import { BsBoxes } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { RiFileList3Line } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { setProductActionType } from '../../pages/products/productsSlice';
import { setCustomerActionType } from '../../pages/customer/customerSlice';
import { setInventoryActionType } from '../../pages/inventory/inventorySlice';
const SidebarExpand = () => {


    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleRoute = (url) => {
        navigate(url)
        dispatch(setProductActionType(""))
        dispatch(setCustomerActionType(""))
        dispatch(setInventoryActionType(""))
    }
    return (
        <div className="min-w-[300px]  border-r-1 border-default-200">
            {/* <div className="h-[64px] flex justify-center items-center">
                <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
                    <path
                        clipRule="evenodd"
                        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
                        fill="currentColor"
                        fillRule="evenodd"
                    />
                </svg>
                <p className="hidden sm:block font-bold text-inherit">ClothCart</p>
            </div> */}
            {/* <Divider /> */}
            <Listbox selectionMode='single' hideSelectedIcon classNames={{ list: "gap-2 h-[180px] text-2xl" }}>
                <ListboxItem startContent={<BsBoxes />} classNames={{ title: "text-xl" }} key="products" onClick={() => handleRoute("/products")}>
                    Products
                </ListboxItem>
                <ListboxItem startContent={<IoIosPeople />} classNames={{ title: "text-xl" }} key="customers" onClick={() => handleRoute("/customers")}>
                    Customers
                </ListboxItem>
                <ListboxItem startContent={<RiFileList3Line />} classNames={{ title: "text-xl" }} key="inventory" onClick={() => handleRoute("/inventory")}>
                    Inventory
                </ListboxItem>
            </Listbox>
        </div>
    )
}

export default SidebarExpand