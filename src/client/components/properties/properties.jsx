import React from 'react'
import ProductProperties from './productProperties'
import CustomerProperties from './customerProperties'
import OrderProperties from './orderProperties'
import { useSelector } from 'react-redux'

const Properties = () => {

    const productActionType = useSelector((state) => state.product.productActionType)
    const customerActionType = useSelector((state) => state.customer.customerActionType)
    const orderActionType = useSelector((state) => state.order.orderActionType)


    return (<>
        {
            productActionType &&
            <ProductProperties />
        }
        {
            customerActionType &&
            <CustomerProperties />
        }
        {
            orderActionType &&
            <OrderProperties />
        }
    </>
    )
}

export default Properties