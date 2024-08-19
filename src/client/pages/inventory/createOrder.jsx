import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, TableHeader, TableColumn, TableBody, TableRow, Input, TableCell, User, Chip, Tooltip, getKeyValue, Button, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Textarea } from "@nextui-org/react";
import { MdOutlineEdit, MdDeleteOutline } from "react-icons/md";
// import CustomerModal from "../../components/modals/customarModal";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { setCustomerId, setCustomer_Id, setCustomerAddress, setCustomerName, setListUpdate } from "../customer/customerSlice";
// import { setCustomer_Id, setCustomerAddress, setCustomerId, setCustomerName, setListUpdate } from "./customerSlice";


const CreateOrder = () => {
  const update = useSelector((state) => state.customer.listUpdate)
  const [orders, setOrders] = useState([])
  const [modalType, setModalType] = useState("add")

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const dispatch = useDispatch()

  useEffect(() => {
    axios.get("http://localhost:3000/api/orders")
      .then((res) => {
        setOrders([...res.data])
        console.log(orders)
      })
  }, [update])

  const handleCustomerCreate = () => {
    //   setModalType("add")
    //   dispatch(setCustomerName(""))
    //   dispatch(setCustomerId(""))
    //   dispatch(setCustomerAddress(""))
  }

  // const handleEditCustomer = async (id) => {
  //   onOpen()
  //   setModalType("edit")

  //   const response = users.filter((user) => user._id === id)
  //   const matchedUser = response[0]

  //   dispatch(setCustomerName(matchedUser.customerName))
  //   dispatch(setCustomerId(matchedUser.customerId))
  //   dispatch(setCustomerAddress(matchedUser.customerAddress))
  //   dispatch(setCustomer_Id(id))
  // }

  // const handleDeleteCustomer = async (id) => {
  //   const res = await axios.delete(`http://localhost:3000/api/customers/${id}`)
  //   console.log(res)
  //   dispatch(setListUpdate())

  // }
  return (
    <div className="max-w-5xl mx-auto mt-5 w-full">
      <div className="flex justify-end my-5">
        
        <Button onPress={onOpen} aria-label="Create Customer" onClick={handleCustomerCreate}><Link to="/inventory">Back</Link></Button>
      </div>
      <Table selectionMode="single" aria-label="Customer Table">
        <TableHeader>
          <TableColumn>Order ID</TableColumn>
          <TableColumn>Date</TableColumn>
          <TableColumn align="center">Bill No</TableColumn>
          <TableColumn align="center">Customer ID</TableColumn>
          <TableColumn align="center">Total Discount</TableColumn>
          <TableColumn align="center">Due Amount</TableColumn>
          <TableColumn align="center">Paid Amount</TableColumn>
          <TableColumn align="center">Action</TableColumn>
        </TableHeader>
        <TableBody>
          {
            orders.map((item) => {
              let totalDiscount = 0
              let dueAmount = 0
              let totalAmount = 0
              item.products.map((i)=>{
                totalDiscount+=i.productDiscount
                totalAmount+=i.productPrice
              })
              dueAmount =((totalAmount-totalDiscount)-item.paidAmount)
              return (
                <TableRow key={item._id}>
                  <TableCell>
                    <div>{item._id}</div>
                  </TableCell>
                  <TableCell>
                    <div>{item.billDate}</div>
                  </TableCell>
                  <TableCell>
                    <div>{item.billNo}</div>
                  </TableCell>
                  <TableCell>
                    <div>{item.customerId}</div>
                  </TableCell>
                  <TableCell>
                  {totalDiscount}
                  </TableCell>
                  <TableCell>
                    {dueAmount}
                  </TableCell>
                  <TableCell>
                   <div>{item.paidAmount}</div>
                  </TableCell>
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
              )
            })
          }
        </TableBody>
      </Table>


      {/* <CustomerModal isOpen={isOpen} modalType={modalType} onOpenChange={onOpenChange} /> */}
    </div>
  )
}

export default CreateOrder

