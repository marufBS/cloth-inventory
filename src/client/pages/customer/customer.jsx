import React, { useEffect, useState } from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip, getKeyValue } from "@nextui-org/react";
import { MdOutlineEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
// import { users } from "./data";
import axios from "axios";
const columns = [
  { name: "NAME", uid: "fullname" },
  { name: "ADDRESS", uid: "address" },
  { name: "ACTIONS", uid: "actions" },
];


export default function Customer() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    axios.get("http://localhost:3000/users")
      .then((res) => {
        setUsers([...res.data])
      })
  }, [])


  const renderCell = React.useCallback((user, columnKey) => {
    const cellValue = user[columnKey];

    switch (columnKey) {
      case "fullname":
        return (
          <User
            avatarProps={{ radius: "lg", src: "https://i.pravatar.cc/150?u=a042581f4e29026024d" }}
            description={user.email}
            name={cellValue}
          >
            {user.email}
          </User>
        );
      case "address":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
          </div>
        );
      case "actions":
        return (
          <div className="flex justify-center items-center">
            <div className="relative flex items-center gap-4">
              <Tooltip content="Edit user">
                <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                  <MdOutlineEdit />
                </span>
              </Tooltip>
              <Tooltip color="danger" content="Delete user">
                <span className="text-lg text-danger cursor-pointer active:opacity-50">
                  <MdDeleteOutline />
                </span>
              </Tooltip>
            </div>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-5">
      <Table aria-label="Example table with custom cells">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={users}>
          {(item) => (
            <TableRow key={item._id}>
              {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
