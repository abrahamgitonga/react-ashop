import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark px-sm-5">
        <Link to="/">{logo}</Link>
        <ul className="navbar-nav">
          <li className="nav-item ml-5">
            <Link to="/">Products</Link>
          </li>
        </ul>
        <Link to="/cart">
          <button>
            <span>
              <i className="fas fa-cart-plus" />
            </span>
            my cart
          </button>
        </Link>
      </nav>
    );
  }
}

export default Navbar;
