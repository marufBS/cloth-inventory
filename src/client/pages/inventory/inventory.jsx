import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, TableHeader, TableColumn, TableBody, TableRow, Input, TableCell, User, Chip, Tooltip, getKeyValue, Button, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Textarea } from "@nextui-org/react";
import { MdOutlineEdit, MdDeleteOutline } from "react-icons/md";
// import CustomerModal from "../../components/modals/customarModal";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setInventoryActionType } from "./inventorySlice";
// import { setCustomerId, setCustomer_Id, setCustomerAddress, setCustomerName, setListUpdate } from "../customer/customerSlice";
// import { setCustomer_Id, setCustomerAddress, setCustomerId, setCustomerName, setListUpdate } from "./customerSlice";


const Inventory = () => {
  const update = useSelector((state) => state.customer.listUpdate)
  const [orders, setOrders] = useState([])
  const [modalType, setModalType] = useState("add")
  const [selectedKeys, setSelectedKeys] = React.useState(new Set([]));

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    axios.get("http://localhost:3000/api/orders")
      .then((res) => {
        setOrders([...res.data])
        console.log(orders)
      })
  }, [update])

  const handleCustomerCreate = () => {
    dispatch(setInventoryActionType("add"))
  }


  console.log(selectedKeys)
  return (
    <div className="max-w-5xl mx-auto mt-5 w-full">
      <div className="flex flex-col p-2">
        <div className="flex justify-end my-5">
          <Button
            //  onPress={onOpen} 
            aria-label="Create Customer" onClick={handleCustomerCreate}>Create Order</Button>
        </div>
        <Table
          selectedKeys={selectedKeys}
          onSelectionChange={setSelectedKeys}
          selectionMode="single"
          aria-label="Customer Table"
          selectionBehavior="replace"
          classNames={{ wrapper: "overflow-auto" }}
        >
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
                item.products.map((i) => {
                  totalDiscount += i.productDiscount
                  totalAmount += i.productPrice
                })
                dueAmount = ((totalAmount - totalDiscount) - item.paidAmount)
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
      </div>
      {/* {
          isOrder &&
          <div className="bg-slate-400 flex-1">sdfdsf</div>
        } */}

      {/* <CustomerModal isOpen={isOpen} modalType={modalType} onOpenChange={onOpenChange} /> */}
    </div>
  )
}

export default Inventory

