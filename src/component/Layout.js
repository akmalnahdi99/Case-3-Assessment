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
          {children}
          
        <div className="rline p-1" style={{ backgroundColor: "#B2B2B2"}}>

        </div>
        <div className="rline p-1" style={{ backgroundColor: "#ca1f05"}}>

        </div>
        
        <Footer />
      </div>
    </React.Fragment>
  );
}