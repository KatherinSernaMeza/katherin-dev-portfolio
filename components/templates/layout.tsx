import React, { ReactNode } from "react";

type LayoutProps = {
  header: ReactNode;
  cover: ReactNode;
  main: ReactNode;
  footer: ReactNode;
};

function Layout({ header, cover, main, footer }: LayoutProps) {
  return (
    <div id="layout">
      <div className="layout__cover">
        <header>{header}</header>
        <div style={{ height: "100%" }}>{cover}</div>
      </div>
      <main>{main}</main>
      <footer>{footer}</footer>
    </div>
  );
}

export default Layout;
