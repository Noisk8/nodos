'use client';

import React from "react";
import Link from "next/link";
import {
  Navbar,
  NavbarContent,
  NavbarItem,

} from "@nextui-org/react";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (


    <Navbar position="static" className="pt-8">
   <Link className="text-4xl" href="/nodos" style={{ textShadow: "2px 2px 4px #FF00FF", color: "#FF00FF" }}> </Link >

    <NavbarContent className="hidden sm:flex gap-4" justify="center">
      <NavbarItem>
      <Link className="text-4xl" href="/nodos" style={{ textShadow: "2px 2px 4px #FF00FF", color: "#FF00FF" }}> ⚗️ Nodos</Link >

      </NavbarItem>
      <NavbarItem isActive>
      <Link className="text-4xl" href="/gateways" style={{ textShadow: "2px 2px 4px #FF00FF", color: "#FF00FF" }}> ⚗️ Gateways</Link >

      </NavbarItem>
     
    </NavbarContent>
    <NavbarContent justify="end">
      <NavbarItem className="hidden lg:flex">
        <Link href="#"></Link>
      </NavbarItem>
      <NavbarItem>
    
      </NavbarItem>
    </NavbarContent>
  </Navbar>
      

  );
}
