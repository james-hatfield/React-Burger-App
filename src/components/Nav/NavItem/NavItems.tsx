import React from "react";
import classes from "./NavItems.module.css";
import { Link } from "../../../data.types";

const NavItems = (props: { links: Link[] }) => {
  const links = props.links.map((l, i) => (
    <li key={i} className={classes.NavItem}>
      <a className={l.active ? classes.active : ""} href={l.link}>
        {l.text}
      </a>
    </li>
  ));
  return (
    <ul className={classes.NavItems}>
      <div></div>
      {links}
    </ul>
  );
};
export default NavItems;
