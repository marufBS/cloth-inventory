import React, { useEffect, useRef, useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar, Button } from "@nextui-org/react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { CiDark, CiLight } from "react-icons/ci";
import { MdLightMode } from "react-icons/md";
import { tootgleTheme } from "../../AppSlice";
import { CiMenuFries } from "react-icons/ci";
import { setMinify } from "../sidebars/sidebarExpandSlice";

export default function Appbar() {
  const user = useSelector((state) => state.user.userData)
  const darkTheme = useSelector((state) => state.app.darkTheme)
  const dispatch = useDispatch()
  // console.log(user)

  return (
    <Navbar classNames={{ wrapper: 'max-w-full px-2' }} position="static" as="div" isBordered>

      <NavbarBrand className="gap-5">
        <div className="flex items-center">
          <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
            <path
              clipRule="evenodd"
              d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
              fill="currentColor"
              fillRule="evenodd"
            />
          </svg>

          <p className="font-bold text-inherit">ACME</p>
        </div>
        <Button isIconOnly variant="light" onClick={()=>dispatch(setMinify())}>

        <CiMenuFries size={20} />
        </Button>
      </NavbarBrand>
      <NavbarContent as="div" className="items-center gap-5" justify="end">
        {/* <NavbarItem>
          d
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
          <Button isIconOnly variant="light" radius="full" color="primary" aria-label="Theme mode" onClick={() => dispatch(tootgleTheme())}>

            {
              darkTheme ? <CiLight size={25} /> : <CiDark size={25} />
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
