//Elements and modules

import { Link, NavLink } from "react-router-dom";
import { useState, useContext } from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import CartWidget from "../CartWidget/CartWidget";
import { Switch } from "@mui/material";
import Brightness3Icon from "@mui/icons-material/Brightness3";
import Brightness7Icon from "@mui/icons-material/Brightness7";

//Components

import SearchButton from "../SearchButton/SearchButton";
import { CartContext } from "../../context/CartContext";

//Styles

import "./NavBar.scss";
import { useEffect } from "react";

function NavBar({ themeChange }) {
  const { product, theme, setTheme } = useContext(CartContext);
  const [logo, setLogo] = useState("");
  const [click, setClick] = useState("");

  const showHamburger = () => {
    if (click === "") {
      setClick("is-active");
    } else {
      setClick("");
    }
  };

  let activeClassName = "active";
  let defaultClassName = "link";
  useEffect(
    () => {
      if (theme === "dark") {
        setLogo("/images/LogoTiendaBlack.webp");
      } else {
        setLogo("/images/LogoTienda.webp");
      }
    },

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [theme]
  );

  return (
    <Navbar
      bg={theme}
      variant={theme}
      expand="lg"
      className={theme}
      sticky="top"
    >
      <Link to="/">
        <Navbar.Brand>
          <img src={logo} alt="Logo tienda" className="navImg" />
        </Navbar.Brand>
      </Link>
      <div className={`nav__menuHamburger  ${click}`}>
        <Button
          variant="light"
          className="nav__menuHamburger--close"
          type="button"
          onClick={() => showHamburger()}
        >
          X
        </Button>

        <SearchButton />

        <ul className="nav__menuHamburgerNav">
          <li className="nav__menuHamburger--item">
            <Link to="/Cart" onClick={() => showHamburger()}>
              {product.length > 0 && <CartWidget cantItem={product.length} />}
            </Link>
          </li>
          <li className="nav__menuHamburger--item">
            <NavLink
              to="/"
              className="nav-link"
              aria-current="page"
              onClick={() => showHamburger()}
            >
              Home
            </NavLink>
          </li>
          <li className="nav__menuHamburger--item">
            <NavLink
              to="category/men"
              className="nav-link"
              onClick={() => showHamburger()}
            >
              Ropa de hombre
            </NavLink>
          </li>
          <li className="nav__menuHamburger--item">
            <NavLink
              to="category/women"
              className="nav-link"
              onClick={() => showHamburger()}
            >
              Ropa de mujer
            </NavLink>
          </li>
          <li className="nav__menuHamburger--item">
            <NavLink
              to="category/jewelery"
              className="nav-link"
              onClick={() => showHamburger()}
            >
              Joyeria
            </NavLink>
          </li>
          <li className="nav__menuHamburger--item">
            <NavLink
              to="category/electronics"
              className="nav-link"
              onClick={() => showHamburger()}
            >
              Electronica
            </NavLink>
          </li>
          <li className="nav__menuHamburger--item">
            <>{theme === "light" ? <Brightness7Icon /> : <Brightness3Icon />}</>
            <Switch
              checked={theme === "dark"}
              onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
            />
          </li>
        </ul>
      </div>
      <button
        className="navbar-toggler navIcon"
        type="button"
        onClick={() => showHamburger()}
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <Navbar.Collapse id="menuCollapse" className="navLinks">
        <Nav className="navElement">
          <NavLink
            className={({ isActive }) =>
              isActive ? activeClassName : defaultClassName
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? activeClassName : defaultClassName
            }
            to="category/men"
          >
            Ropa de hombre
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? activeClassName : defaultClassName
            }
            to="category/women"
          >
            Ropa de mujer
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? activeClassName : defaultClassName
            }
            to="category/jewelery"
          >
            Joyeria
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? activeClassName : defaultClassName
            }
            to="category/electronics"
          >
            Electronica
          </NavLink>
          <Link to="/Cart">
            {product.length > 0 && <CartWidget cantItem={product.length} />}
          </Link>

          <SearchButton />
          <div>
            <>
              {theme === "light" ? (
                <Brightness7Icon />
              ) : (
                <Brightness3Icon className="iconColor" />
              )}
            </>
            <Switch
              checked={theme === "dark"}
              onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
              onClick={() =>
                themeChange(theme === "dark" ? "Applight" : "Appdark")
              }
            />
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
