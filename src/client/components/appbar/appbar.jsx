import React, { useEffect, useRef, useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar, Button } from "@nextui-org/react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { CiDark,CiLight } from "react-icons/ci";
import { MdLightMode } from "react-icons/md";
import { tootgleTheme } from "../../AppSlice";

export default function Appbar() {
  const user = useSelector((state) => state.user.userData)
  const darkTheme = useSelector((state) => state.app.darkTheme)
  const dispatch = useDispatch()
  console.log(user)

  return (
    <Navbar position="fixed" as="div" isBordered className="w-full justify-around">
      <NavbarContent as="div" className="items-center gap-5" justify="end">
        {/* <NavbarItem>
          <Link to="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link to="/inventory">
            Inventory
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link to="/products">
            Produtcs
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link to="/customer">
            Customer
          </Link>
        </NavbarItem> */}
        <NavbarItem>
        <Button isIconOnly variant="light" radius="full" color="primary" aria-label="Theme mode" onClick={()=>dispatch(tootgleTheme())}>
        
        {
          darkTheme?<CiLight size={25}/>:<CiDark size={25}/>
        }
      </Button>   
        </NavbarItem>
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">{user.email}</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>

  );
}
