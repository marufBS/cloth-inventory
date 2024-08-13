import React, { useEffect, useRef } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar } from "@nextui-org/react";
import { Link } from 'react-router-dom';

export default function Appbar() {
 
  return (
    <div className="flex">
      <Navbar as="div" isBordered className="w-full justify-around">
        <NavbarContent justify="between">
          <NavbarBrand className="mr-4">
            {/* <AcmeLogo /> */}
            <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
              <path
                clipRule="evenodd"
                d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
                fill="currentColor"
                fillRule="evenodd"
              />
            </svg>
            <p className="hidden sm:block font-bold text-inherit">ClothCart</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent as="div" className="items-center gap-5" justify="end">
          <NavbarItem>
            <Link to="/">
              Products
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link to="/inventory">
              Inventory
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link to="/customer">
              Customer
            </Link>
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
                <p className="font-semibold">zoey@example.com</p>
              </DropdownItem>
              <DropdownItem key="settings">My Settings</DropdownItem>
              <DropdownItem key="logout" color="danger">
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>
      </Navbar>

    </div>

  );
}
