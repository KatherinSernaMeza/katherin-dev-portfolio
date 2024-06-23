import React, { ReactNode } from "react";
import Nav from "../nav/nav";
import Footer from "../footer/footer";

type LayoutProps = {
  children: ReactNode;
};

function layout({ children }: LayoutProps) {
  return (
    <div id="layout">
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default layout;
