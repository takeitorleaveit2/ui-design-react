import React from "react";
import "./App.scss";
import Navbar from "./Components/navbar";

interface appProps {
  loggedIn?: boolean;
  /** The content of the button */
  children: React.ReactElement;
}

function App({ loggedIn, children }: appProps) {
  return (
    <>
      <Navbar />
      <div className="container py-4 px-3 mx-auto">{children}</div>;
    </>
  );
}

export default App;
