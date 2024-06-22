import React, { ReactNode } from "react";
import Nav from "../nav/nav";
import Footer from "../footer/footer";

type LayoutProps = {
  children: ReactNode;
};

function layout({ children }: LayoutProps) {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default layout;
