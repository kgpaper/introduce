import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderLayout = styled.div`
  padding-top: 48px;
  padding-left: 100px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #88a3ad;
  font-family: GowunDodum-Regular;

  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }

  nav {
    display: flex;
    align-items: center;
    padding: 0.25em;
    height: 55px;
  }

  nav ul {
    list-style: none;
    float: right;
  }

  nav ul li {
    padding: 18px;
    display: inline-block;
    text-decoration: none;
    color: black;
  }

  nav ul li a {
    padding: 18px;
    text-decoration: none;
    display: inline-block;
    color: black;
    position: relative;

    box-shadow: 0 0 5px rgba(0, 0, 0, 0), inset 0 0 1px rgba(0, 0, 0, 0);
    transition-property: box-shadow;
    transition-duration: 0.5s;
  }

  nav ul li a:hover {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3), inset 0 0 1px rgba(255, 255, 255, 0.3);
    color: rgba(0, 0, 0, 1);
  }
`;

const Header = () => {
  return (
    <HeaderLayout>
      <header>
        <nav>
          <h1>Hi</h1>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </header>
    </HeaderLayout>
  );
};

export default Header;
