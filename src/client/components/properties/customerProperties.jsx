import { Card, Divider, Textarea, Input, Button } from '@nextui-org/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { setCustomerAddress, setCustomerPhone, setCustomerName, setListUpdate, setCustomer_Id } from '../customers/customerSlice'

const CustomerProperties = () => {
    const dispatch = useDispatch()
    const customerActionType = useSelector((state) => state.customer.customerActionType)
    const customerName = useSelector((state) => state.customer.customerName)
    const customerPhone = useSelector((state) => state.customer.customerPhone)
    const customerAddress = useSelector((state) => state.customer.customerAddress)
    const customer_Id = useSelector((state) => state.customer.customer_Id)


    // useEffect(() => {
    //     dispatch(setProductPrice(""))
    //     dispatch(setProductQuantity(""))

    // }, [])

    const handleCustomer = async () => {
        switch (customerActionType) {
            case "add":
                console.log("testing")
                axios.post("/api/customers", {
                    customerName, customerPhone, customerAddress
                }).then((res) => {
                    console.log(res)
                    dispatch(setCustomerName(""))
                    dispatch(setCustomerPhone(""))
                    dispatch(setCustomerAddress(""))
                    dispatch(setCustomer_Id(""))
                    dispatch(setListUpdate())
                })
                return;
            case "edit":
                const updateCustomer = { customerName, customerPhone, customerAddress }
                const response = await axios.put(`/api/customers/${customer_Id}`, updateCustomer)

                console.log(response)
                dispatch(setListUpdate())
                return
            default:
                return;
        }
    }
    return (
        <Card className='flex-1 rounded-none p-2'>
            <div className='text-center text-xl'>
                {customerActionType === "edit" ? 'Update Customer' : 'Add Customer'}
            </div>
            <Divider className='my-2' />
            <div className='flex flex-col gap-5'>
                <Input
                    aria-label="Customer-Name"
                    isRequired
                    type="text"
                    label="Customer Name"
                    variant="bordered"
                    placeholder='Enter your full name'
                    className="max-w-xs text-default-foreground"
                    defaultValue={customerName}
                    value={customerName}
                    onChange={(e) => dispatch(setCustomerName(e.target.value))}
                />
                <Input
                    aria-level="Customer Phone"
                    isRequired
                    type="text"
                    label="Customer Phone Number"
                    variant="bordered"
                    placeholder="Enter customer's phone number"
                    className="max-w-xs text-default-foreground"
                    defaultValue={customerPhone}
                    value={customerPhone}
                    onChange={(e) => dispatch(setCustomerPhone(e.target.value))}
                />
                <Textarea
                    aria-label="Customer-Address"
                    isRequired
                    type="text"
                    label="Address"
                    variant="bordered"
                    placeholder='Enter your address'
                    className="max-w-xs text-default-foreground"
                    defaultValue={customerAddress}
                    value={customerAddress}
                    onChange={(e) => dispatch(setCustomerAddress(e.target.value))}
                />
                <Button onClick={() => handleCustomer()} onPress={handleCustomer}>{customerActionType === "edit" ? 'Update' : 'Add'}</Button>
            </div>
        </Card>
    )
}

export default CustomerProperties