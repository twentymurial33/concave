import React from "react";
import Nav from "./Nav";
import Drawer from "./Drawer";

function Layout(props) {
  const { children } = props;
  return (
    <>
      <Drawer />
      <Nav />
      <main>{children}</main>
    </>
  );
}

export default Layout;
