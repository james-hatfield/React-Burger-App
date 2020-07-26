import React from "react";
import classes from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import NavItems from "../NavItem/NavItems";
import { Link } from "../../../data.types";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const Toolbar = (props: { links: Link[]; toggleDrawer: () => void }) => (
  <header className={classes.Toolbar}>
    <DrawerToggle toggle={props.toggleDrawer} />
    <Logo />
    <nav className={classes.DesktopOnly}>
      <NavItems links={props.links} />
    </nav>
  </header>
);
export default Toolbar;
