import React from "react";
import Layout from "@/components/templates/layout";
import type { AppProps } from "next/app";
import "../styles/global.scss"
import Nav from "@/components/nav/nav";
import FrontPage from "@/components/frontpage";
import Footer from "@/components/footer/footer";

function App({ Component, pageProps }: AppProps) {
  const header = <Nav/>
  const cover = <FrontPage />;
  const main = <Component {...pageProps} />;
  const footer = <Footer />

  return (
    <Layout
      header={header}
      cover={cover}
      main={main}
      footer={footer}
    />
  );
}

export default App;