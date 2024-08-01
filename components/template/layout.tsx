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
      <Nav />
      <FrontPage />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default layout;
