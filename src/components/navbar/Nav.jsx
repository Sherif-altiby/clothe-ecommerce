import { useEffect, useState } from "react";
import "./Nav.scss";
import { Link, NavLink } from "react-router-dom";
import Cart from "../cart/Cart";
import { useSelector } from "react-redux";
import Languages from "../languages/Languages";
import { useTranslation } from "react-i18next";
import i18n from '../i18n';

const Nav = () => {
  const theme = useSelector((state) => state.theme);
  const language = useSelector((state) => state.language);
  const { t } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  const [block, setBlock] = useState(false);
  const blockHandler = () => {
    setBlock(!block);
  };

  const menuBlock = () => {
    setBlock(false);
  };

  const [cartBlock, setCartBlock] = useState(false);
  const handleCart = () => {
    setCartBlock(!cartBlock);
  };

  const removeCart = () => {
    setCartBlock(false);
  };

  window.onscroll = () => {
    const navBG = document.querySelector(".header");
    if (
      document.body.scrollTop >= 60 ||
      document.documentElement.scrollTop >= 20
    ) {
      if (theme === "dark") {
        navBG.style.setProperty("background-color", "black");
      } else {
        navBG.style.setProperty("background-color", "white");
      }
    } else {
      navBG.style.setProperty("background-color", "");
    }
  };

  const navBG = document.querySelector(".header");
  if (
    document.body.scrollTop >= 60 ||
    document.documentElement.scrollTop >= 20
  ) {
    if (theme === "dark") {
      navBG.style.setProperty("background-color", "black");
    } else {
      navBG.style.setProperty("background-color", "white");
    }
  }

  const cartLength = useSelector((state) => state.cart).length;

  return (
    <>
      <nav className={theme === "dark" ? "header" : "header light"}>
        <div className="navbar container">
          <div className="nav_left">
            <h1> {t("my-store")}</h1>
          </div>
          <div className="nav_center">
            <div className="bar" onClick={blockHandler}>
              <i className="fa-solid fa-bars"></i>
            </div>
            <ul className={block ? "block" : ""}>
              <li>
                <NavLink to="/" onClick={menuBlock}>                   
                  {t("home")} 
                </NavLink>
              </li>
              <li>
                <NavLink to="/women" onClick={menuBlock}>                 
                  {t("women")} 
                </NavLink>
              </li>
              <li>
                <NavLink to="/men" onClick={menuBlock}>                   
                  {t("men")} 
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" onClick={menuBlock}>         
                  {t("about")} 
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="nav_right">
            <Languages />
            <div className="cart_icon">
              <i className="fa-solid fa-cart-shopping" onClick={handleCart}></i>
              <span> {cartLength} </span>
            </div>
            <Cart cartBlock={cartBlock} removeCart={removeCart} />
            <div className="search_icon">
              <Link to="/search">
                <i className="fa-solid fa-magnifying-glass"></i>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
