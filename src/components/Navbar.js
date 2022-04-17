import React, { useEffect, useState } from "react";
import "./../Styles/Navbar.css";

function Navbar() {
  const [show, setShow] = useState(false);

  const scroll = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else setShow(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", scroll);
    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img src="" alt="Netflix Logo" className="nav_logo" />
      <img src="" alt="Avatar" className="nav_avatar" />
    </div>
  );
}

export default Navbar;
