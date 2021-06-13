import React, { useState } from "react";
import { BiUpArrow } from "react-icons/bi";
import "../styles/components/ScrollToTop.scss";

function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  window.addEventListener("scroll", toggleVisible);
  return (
    <>
      {visible && (
        <div className="scrollToTop" onClick={scrollToTop}>
          <BiUpArrow />
        </div>
      )}
    </>
  );
}

export default ScrollToTop;
