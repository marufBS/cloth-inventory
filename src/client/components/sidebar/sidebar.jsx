import React from 'react'
import { Listbox, ListboxItem } from '@nextui-org/react'
import { BsBoxes } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { RiFileList3Line } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import { setProductActionType } from '../products/productsSlice';
import { setOrderActionType } from '../orders/orderSlice';
import { setCustomerActionType } from '../customers/customerSlice';



const Sidebar = () => {
    const isSidebarMinify = useSelector((state) => state.sidebar.minify)


    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleRoute = (url) => {
        navigate(url)
        dispatch(setProductActionType(""))
        dispatch(setCustomerActionType(""))
        dispatch(setOrderActionType(""))
    }
    return (
        <div className="">
            <Listbox selectionMode='single' hideSelectedIcon classNames={{ list: `gap-2 h-[150px] text-2xl` }}>
                <ListboxItem classNames={{ title: `text-xl flex ${isSidebarMinify?'justify-center':'justify-start gap-4'}  items-center`, }} key="products" onClick={() => handleRoute("/products")}>
                  
                        <BsBoxes size={20}/>
                        {!isSidebarMinify &&

                            <div>Products</div>
                        }
                </ListboxItem>
                <ListboxItem classNames={{ title: `text-xl flex ${isSidebarMinify?'justify-center':'justify-start gap-4'} items-center`, }} key="customers" onClick={() => handleRoute("/customers")}>
                  
                        <IoIosPeople size={20} />
                        {!isSidebarMinify &&

                            <div>Customers</div>
                        }
                </ListboxItem>
                <ListboxItem classNames={{ title: `text-xl flex ${isSidebarMinify?'justify-center':'justify-start gap-4'}  items-center`, }} key="orders" onClick={() => handleRoute("/orders")}>
                  
                        <RiFileList3Line size={20}/>
                        {!isSidebarMinify &&

                            <div>Orders</div>
                        }
                </ListboxItem>
                
            </Listbox>
        </div>
    )
}

export default Sidebar
