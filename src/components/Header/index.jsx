import React from "react";
import Nav from "../Nav";
import "./header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <h1 className="header__title">Country API</h1>
        <Nav />
      </div>
    </header>
  );
}
