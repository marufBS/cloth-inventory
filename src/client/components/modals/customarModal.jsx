import React from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setCustomerAddress, setCustomerId, setCustomerName,setListUpdate } from '../../pages/customer/customerSlice'
import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Textarea } from '@nextui-org/react'


const CustomerModal = ({ isOpen, modalType, onOpenChange }) => {
  const dispatch = useDispatch()


  const customerName = useSelector((state)=>state.customer.customerName)
  const customerId = useSelector((state)=>state.customer.customerId)
  const customerAddress = useSelector((state)=>state.customer.customerAddress)
  const customer_Id = useSelector((state)=>state.customer.customer_Id)




  const handleCustomer = async () => {
    switch (modalType) {
      case "add":
        console.log("testing")
        axios.post("http://localhost:3000/api/customers", {
          customerName, customerId, customerAddress
        }).then((res) => {
          console.log(res)
          dispatch(setListUpdate())
        })
        return;
      case "edit":
        const updateCustomer = { customerName, customerId, customerAddress }
        const response = await axios.put(`http://localhost:3000/api/customers/${customer_Id}`, updateCustomer)

        console.log(response)
        dispatch(setListUpdate())
        return
      default:
        return;
    }
  }

  return (
    <div>
      <Modal aria-label="Product Modal" isOpen={isOpen} onOpenChange={onOpenChange} className="bg-default-900 max-w-xs" >
      <ModalContent>
          {(onClose) => {
            return (
              <>
                <ModalHeader className="flex flex-col gap-1 text-default">Give you customer details</ModalHeader>
                <ModalBody className="flex justify-center">
                  <div className='flex flex-col gap-5'>
                    <Input
                      aria-label="Customer-Name"
                      isRequired
                      type="text"
                      label="Customer Name"
                      variant="bordered"
                      placeholder='Enter your full name'
                      className="max-w-xs text-default"
                      defaultValue={customerName}
                      value={customerName}
                      onChange={(e) => dispatch(setCustomerName(e.target.value))}
                    />
                    <Input
                      aria-level="Customer-ID"
                      isRequired
                      type="text"
                      label="Customer ID"
                      variant="bordered"
                      placeholder='Enter your username'
                      className="max-w-xs text-default"
                      defaultValue={customerId}
                      value={customerId}
                      onChange={(e) => dispatch(setCustomerId(e.target.value))}
                    />
                    <Textarea
                      aria-label="Customer-Address"
                      isRequired
                      type="text"
                      label="Address"
                      variant="bordered"
                      placeholder='Enter your address'
                      className="max-w-xs text-default"
                      defaultValue={customerAddress}
                      value={customerAddress}
                      onChange={(e) => dispatch(setCustomerAddress(e.target.value))}
                    />
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                  <Button color="primary" onPress={onClose} onClick={() => handleCustomer(modalType)}>
                    Action
                  </Button>
                </ModalFooter>
              </>
            )
          }}
        </ModalContent>
      </Modal>
    </div>
  )
}

export default CustomerModal