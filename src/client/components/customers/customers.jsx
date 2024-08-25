import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User,  Tooltip,  Button} from "@nextui-org/react";
import { MdOutlineEdit, MdDeleteOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { setCustomer_Id, setCustomerActionType, setCustomerAddress, setCustomerId, setCustomerName, setListUpdate } from "./customerSlice";


export default function Customers() {

  const update = useSelector((state) => state.customer.listUpdate)
  const [users, setUsers] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    axios.get("http://localhost:3000/api/customers")
      .then((res) => {
        setUsers([...res.data])
      })
  }, [update])

  const handleCustomerCreate = () => {
    dispatch(setCustomerActionType("add"))
    dispatch(setCustomerName(""))
    dispatch(setCustomerId(""))
    dispatch(setCustomerAddress(""))
  }

  const handleEditCustomer = async (id) => {
    dispatch(setCustomerActionType("edit"))

    const response = users.filter((user) => user._id === id)
    const matchedUser = response[0]

    dispatch(setCustomerName(matchedUser.customerName))
    dispatch(setCustomerId(matchedUser.customerId))
    dispatch(setCustomerAddress(matchedUser.customerAddress))
    dispatch(setCustomer_Id(id))
  }

  const handleDeleteCustomer = async (id) => {
    const res = await axios.delete(`http://localhost:3000/api/customers/${id}`)
    console.log(res)
    dispatch(setListUpdate())

  }

  return (
    <div className="max-w-4xl mx-auto mt-5 w-full">
      <div className="flex justify-end my-5">
        <Button
          //  onPress={onOpen}
          aria-label="Create s" onClick={handleCustomerCreate}>Create customer</Button>
      </div>
      <Table selectionMode="single" aria-label="s Table">
        <TableHeader>
          <TableColumn>NAME</TableColumn>
          <TableColumn>ADDRESS</TableColumn>
          <TableColumn align="center">ACTION</TableColumn>
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
    </div>
  );
}
