import React, { useEffect, useState } from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, Input, TableCell, User, Chip, Tooltip, getKeyValue, Button, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Textarea } from "@nextui-org/react";
import { MdOutlineEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
// import { users } from "./data";
import axios from "axios";
// import { Input } from "postcss";
const columns = [
  { name: "NAME", uid: "fullname" },
  { name: "ADDRESS", uid: "address" },
  { name: "ACTIONS", uid: "actions" },
];


export default function Customer() {
  const [users, setUsers] = useState([])
  const [customerName, setCustomerName] = useState("")
  const [customerId, setCustomerId] = useState("")
  const [customerAddress, setCustomerAddress] = useState("")
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isTrue, setIstrue] = useState(true)
  const handleTableUpdate = () => setIstrue(!isTrue)
  useEffect(() => {
    axios.get("http://localhost:3000/customers")
      .then((res) => {
        setUsers([...res.data])
      })
  }, [isTrue])

  const handleCustomerAdd = () => {
    axios.post('http://localhost:3000/customers', {
      customerName,
      customerId,
      customerAddress
    }).then((res) => console.log(res))
    handleTableUpdate()
  }
  const handleDeleteCustomer = async (id)=>{
    const res = await axios.delete(`http://localhost:3000/customers/${id}`)
    console.log(res)
    handleTableUpdate()
  }

  return (
    <div className="max-w-4xl mx-auto mt-5">
      <div className="flex justify-end my-5">
        <Button onPress={onOpen}>Create Customer</Button>
      </div>
      <Table selectionMode="single" >
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
                          <Button isIconOnly aria-label="edit" variant="light">
                            <MdOutlineEdit size={20}/>
                          </Button>
                        </span>
                      </Tooltip>
                      <Tooltip color="danger" content="Delete">
                        <span className="text-lg text-danger cursor-pointer active:opacity-50">
                          <Button isIconOnly aria-label="delete" variant="light" onClick={()=>handleDeleteCustomer(item._id)}>
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

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} className="bg-default-900 max-w-xs" >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-default">Give you customer details</ModalHeader>
              <ModalBody className="flex justify-center">
                <div className='flex flex-col gap-5'>
                  <Input
                    isRequired
                    type="text"
                    label="Customer Name"
                    variant="bordered"
                    placeholder='Enter your full name'
                    className="max-w-xs text-default"
                    defaultValue={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                  />
                  <Input
                    isRequired
                    type="text"
                    label="Customer ID"
                    variant="bordered"
                    placeholder='Enter your username'
                    className="max-w-xs text-default"
                    defaultValue={customerId}
                    onChange={(e) => setCustomerId(e.target.value)}
                  />
                  <Textarea
                    isRequired
                    type="text"
                    label="Address"
                    variant="bordered"
                    placeholder='Enter your address'
                    className="max-w-xs text-default"
                    defaultValue={customerAddress}
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
                <Button color="primary" onPress={onClose} onClick={handleCustomerAdd}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
