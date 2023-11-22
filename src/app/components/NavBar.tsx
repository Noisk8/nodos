import React from "react";
import {
  Navbar,
  NavbarContent,
  NavbarItem,

} from "@nextui-org/react";

export default function App() {
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
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent justify="end">
        <NavbarItem>
          <a href="#">
            {" "}
            <h1 className="text-xl" style={{ textShadow: "2px 2px 4px #FF00FF", color: "#FF00FF" }}> 💰 Staking</h1>
          </a>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
