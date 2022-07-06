//Elements and modules

import { React, useState, useEffect, useContext } from "react";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

//Components

import { CartContext } from "../../context/CartContext";

//Styles

import "./ScrollButton.scss";

function ScrollButton() {
  const [visible, setVisible] = useState(false);
  const { theme } = useContext(CartContext);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {visible && (
        <div className={theme}>
          <ArrowCircleUpIcon onClick={scrollToTop} className="buttonFooter" />
        </div>
      )}
    </>
  );
}

export default ScrollButton;
