import { Component } from "react";
import MainPC from "./components/PC_Device/MainComponent";
import { BrowserRouter, NavLink } from "react-router-dom";
import "./App.css";
import { stack as Menu } from "react-burger-menu";

export default function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div>
        <Menu>
          <NavLink
            activeStyle={{ color: "#039ab4" }}
            id="home"
            className="menu-item"
            to="/home"
          >
            Home
          </NavLink>
          <NavLink
            activeStyle={{ color: "#039ab4" }}
            id="about"
            className="menu-item"
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            activeStyle={{ color: "#039ab4" }}
            id="contact"
            className="menu-item"
            to="/contact"
          >
            Contact
          </NavLink>
        </Menu>
        <MainPC />
      </div>
    </BrowserRouter>
  );
}
