import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Navigation from "./Navigation";


export default function Layout({children}) {

  return (
    <React.Fragment>
      <div style={{ border: "0px solid red" }}>
        <div className="border-bottom nav-header">
          <Header />
        </div>
        <Navigation />
          {children}
        <Footer />
      </div>
    </React.Fragment>
  );
}