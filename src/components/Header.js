import React, { useState } from "react";
import "./Header.css";
import TeslaLogo from "../assets/teslaLogo.svg";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@mui/icons-material/Close";
import styled from "styled-components";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container className="container">
      <div className="header">
        <div className="header__logo">
          <a href="/">
            <img src={TeslaLogo} alt="Tesla Logo" />
          </a>
        </div>
        <Menu>
          <a href="_">Model S</a>
          <a href="_">Model 3</a>
          <a href="_">Model X</a>
          <a href="_">Model Y</a>
        </Menu>
        <RightMenu>
          <a href="_">Shop</a>
          <a href="_">Tesla Account</a>
          <CustomMenu onClick={() => setIsOpen(true)} />
        </RightMenu>
        <BurgerNav>
          <CloseWrapper open={isOpen}>
            <CustomClose onClick={() => setIsOpen(false)} />
          </CloseWrapper>
          <li>
            <a href="/">Existing Inventory</a>
          </li>
          <li>
            <a href="/">Used Inventory</a>
          </li>
          <li>
            <a href="/">Trade-In</a>
          </li>
          <li>
            <a href="/">Cybertruck</a>
          </li>
          <li>
            <a href="/">Roadster</a>
          </li>
          <li>
            <a href="/">Commercial Energy</a>
          </li>
        </BurgerNav>
      </div>
    </Container>
  );
};

// <div className="header_center">
//         <a className="link" href="_">Model S</a>
//         <a className="link" href="_">Model 3</a>
//         <a className="link" href="_">Model X</a>
//         <a className="link" href="_">Model Y</a>
//         <a className="link" href="_">Solar Roof</a>
//         <a className="link" href="_">Solar Panel</a>
//       </div>
//       <div className="header_right">
//         <a className="link" href="_">Shop</a>
//         <a className="link" href="_">Account</a>

//         <MenuIcon className="menu" />
//       </div>

export default Header;

const Container = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  right: 0;
  left: 0;
  top: 0;
  z-index: 1;
`;

const Menu = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  white-space: nowrap;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 20px;
    color: black;
    user-select: none;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
const RightMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  @media (max-width: 768px) {
    margin-left: 350px;
    white-space: nowrap;
  }
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 20px;
    color: black;
    user-select: none;
  }
`;
const CustomMenu = styled(MenuIcon)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 40px;
  cursor: pointer;
  .MuiSvgIcon-root {
    fill: currentColor;
    width: 1em;
    height: 2em;
  }
`;
const BurgerNav = styled.div`
  display: none;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.open ? "translateX(0)" : "translateX(0)")};
  transition: transform 0.2s ease-in ease-out;
  li {
    padding: 15px 0;
    cursor: pointer;
    user-select: none;
  }

  a {
    font-weight: 600;
  }
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;
