import React from "react";
import classes from "./Layout.module.css";

const Layout = (props: any) => (
  <>
    <div className={classes.content}>Toolbar, SidedDrawer, Backdrop</div>
    <main>{props.children}</main>
  </>
);

export default Layout;
