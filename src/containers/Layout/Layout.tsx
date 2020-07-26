import React from "react";
import classes from "./Layout.module.css";
import Toolbar from "../../components/Nav/Toolbar/Toolbar";
import SideDrawer from "../../components/Nav/SideDrawer/SideDrawer";
import { Link } from "../../data.types";

class Layout extends React.Component {
  state = {
    show: false,
  };

  links: Link[] = [
    { link: "/", text: "Burger Builder", active: false },
    { link: "/", text: "Checkout", active: false },
  ];

  toggleSideDrawer = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    return (
      <>
        <Toolbar
          toggleDrawer={this.toggleSideDrawer}
          links={this.links}
        ></Toolbar>
        <SideDrawer
          isOpen={this.state.show}
          links={this.links}
          closed={this.toggleSideDrawer}
        />
        <main className={classes.Main}>{this.props.children}</main>
      </>
    );
  }
}
export default Layout;
