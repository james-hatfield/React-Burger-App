import React from "react";
import Logo from "../../Logo/Logo";
import NavItems from "../NavItem/NavItems";
import classes from "./SideDrawer.module.css";
import { Link } from "../../../data.types";
import Backdrop from "../../UI/Backdrop/Backdrop";

const SideDrawer = (props: {
  links: Link[];
  closed: () => void;
  isOpen: boolean;
}) => (
  <>
    <Backdrop show={props.isOpen} clicked={props.closed} />
    <div
      className={`${classes.SideDrawer} ${
        props.isOpen ? classes.Open : classes.Close
      }`}
    >
      <Logo class={classes.Logo} />
      <nav>
        <NavItems links={props.links} />
      </nav>
    </div>
  </>
);

export default SideDrawer;
