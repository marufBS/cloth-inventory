import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, TableHeader, TableColumn, TableBody, TableRow, Input, TableCell, User, Chip, Tooltip, getKeyValue, Button, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Textarea } from "@nextui-org/react";
import { MdOutlineEdit ,MdDeleteOutline} from "react-icons/md";


export default function Customer() {
  const [users, setUsers] = useState([])
  const [customerName, setCustomerName] = useState("")
  const [customerId, setCustomerId] = useState("")
  const [customerAddress, setCustomerAddress] = useState("")
  const [isTrue, setIstrue] = useState(true)
  const [modalType, setModalType] = useState("add")
  const [customerDocId, setCustomerDocId] = useState("")
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const handleTableUpdate = () => setIstrue(!isTrue)

  useEffect(() => {
    axios.get("http://localhost:3000/customers")
      .then((res) => {
        setUsers([...res.data])
      })
  }, [isTrue])

  const handleCustomerCreate =  ()=>{
    setCustomerName("")
    setCustomerId("")
    setCustomerAddress("")
  }

  const handleCustomer = async (modalType) => {
    switch (modalType) {
      case "add":
        axios.post('http://localhost:3000/customers', {
          customerName,
          customerId,
          customerAddress
        }).then((res) =>{ 
          // console.log(res)
          handleTableUpdate()
        })    
        return

      case "edit":
        const updateData = { customerName, customerId, customerAddress }
        const response = await axios.put(`http://localhost:3000/customers/${customerDocId}`, updateData)
        // console.log(response)
        setCustomerDocId("")
        handleTableUpdate()
        return

      default:
        return;
    }
  }

  const handleDeleteCustomer = async (id) => {
    const res = await axios.delete(`http://localhost:3000/customers/${id}`)
    // console.log(res)
    handleTableUpdate()
  }
  
  const handleEditCustomer = async (id) => {
    onOpen()
    setModalType("edit")
    const response = users.filter((user) => user._id === id)
    const matchedUser = response[0]
    setCustomerName(matchedUser.customerName)
    setCustomerId(matchedUser.customerId)
    setCustomerAddress(matchedUser.customerAddress)
    setCustomerDocId(matchedUser._id)
  }

  return (
    <div className="max-w-4xl mx-auto mt-5">
      <div className="flex justify-end my-5">
        <Button onPress={onOpen} aria-label="Create Customer" onClick={handleCustomerCreate}>Create Customer</Button>
      </div>
      <Table selectionMode="single" aria-label="Customer Table">
        <TableHeader>
          <TableColumn>NAME</TableColumn>
          <TableColumn>ADDRESS</TableColumn>
          <TableColumn>ACTION</TableColumn>
        </TableHeader>
        <TableBody>
          {
            users.map((item) => (
              <TableRow key={item._id}>
                <TableCell>
                  <User
                    avatarProps={{ radius: "lg", src: item.customerAvatar }}
                    description={item.customerId}
                    name={item.customerName}
                  />
                </TableCell>
                <TableCell>{item.customerAddress}</TableCell>
                <TableCell>
                  <div className="flex justify-center items-center">
                    <div className="relative flex items-center gap-4">
                      <Tooltip content="Edit">
                        <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                          <Button isIconOnly aria-label="edit" variant="light" onClick={() => handleEditCustomer(item._id)}>
                            <MdOutlineEdit size={20} />
                          </Button>
                        </span>
                      </Tooltip>
                      <Tooltip color="danger" content="Delete">
                        <span className="text-lg text-danger cursor-pointer active:opacity-50">
                          <Button isIconOnly aria-label="delete" variant="light" onClick={() => handleDeleteCustomer(item._id)}>
                            <MdDeleteOutline size={20} />
                          </Button>
                        </span>
                      </Tooltip>
                    </div>
                  </div>
                </TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
      {/* {
  users.map(()=>{
    return(

    )
  })
} */}
      <Modal aria-label="customer-modal" isOpen={isOpen} onOpenChange={onOpenChange} className="bg-default-900 max-w-xs" >
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
                      onChange={(e) => setCustomerName(e.target.value)}
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
                      onChange={(e) => setCustomerId(e.target.value)}
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
                      onChange={(e) => setCustomerAddress(e.target.value)}
                    />



                    {/* <span className='text-sm max-w-xs'><Checkbox /> I agree with the <span className='text-blue-500'>Term</span> and <span className='text-blue-500'>Privacy Policy</span></span> */}
                    {/* <Button type='submit' variant='bordered' color="primary" className="max-w-xs">Sign Up</Button> */}
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
  );
}
