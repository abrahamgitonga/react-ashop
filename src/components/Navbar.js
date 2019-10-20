import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ButtonContainer } from "./Button";
class Navbar extends Component {
  state = {};
  render() {
    return (
      <div>
        <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
          <Link to="/">
            <img src=".." alt="LOGO" className="navbar-brand" />
          </Link>
          <ul className="navbar-nav align-items-center">
            <li className="navbar-item ml-5">
              <Link to="/" className="nav-link">
                Product
              </Link>
            </li>
          </ul>
          <Link to="/cart" className="ml-auto">
            <ButtonContainer className="">my cart</ButtonContainer>
          </Link>
        </NavWrapper>
      </div>
    );
  }
}
const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;
export default Navbar;
