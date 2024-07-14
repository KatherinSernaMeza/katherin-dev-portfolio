import React, { ReactNode } from "react";
import Nav from "../nav/nav";
import Footer from "../footer/footer";
import FrontPage from "../frontpage";
type LayoutProps = {
  children: ReactNode;
};

function layout({ children }: LayoutProps) {
  return (
    <div id="layout">
      <div className="layout__grid-templateLayout">
      <Nav />
      <FrontPage/>
      </div>
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default layout;
