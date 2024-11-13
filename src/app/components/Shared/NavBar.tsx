'use client';

import React from "react";
import Link from "next/link";
import {
  Navbar,
  NavbarContent,
  NavbarItem,

} from "@nextui-org/react";


export default function NavBar() {

  return (

  <Navbar position="static" className="pt-8">
    <Link className="text-4xl" href="/nodos" style={{ textShadow: "2px 2px 4px #FF00FF", color: "#FF00FF" }}> </Link>

    <NavbarContent className="flex flex-col sm:flex-row gap-4" justify="center">
      <NavbarItem>
        <Link className="text-3xl" href="/nodos" style={{ textShadow: "2px 2px 4px #FF00FF", color: "#FF00FF" }}> ⚗️ Nodos</Link>
      </NavbarItem>
      <NavbarItem isActive>
        <Link className="text-3xl" href="/gateways" style={{ textShadow: "2px 2px 4px #FF00FF", color: "#FF00FF" }}> ⚗️ Gateways</Link>
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
