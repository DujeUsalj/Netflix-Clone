import classes from "./Nav.module.css";
import React, { useEffect, useState } from "react";

function Nav() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else setShow(false);
    });
    return () => {
      window.removeEventListener("scroll", () => {
        return 0;
      });
    };
  }, []);
  return (
    <div className={`${!show ? classes.Nav : classes.Black}`}>
      <img
        className={classes.Logo}
        src="https://wra360netflix.weebly.com/uploads/5/1/7/2/51728063/3641071.png?490"
        alt="Netflix Logo"
      />
      <img
        className={classes.Avatar}
        src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
        alt="Netflix Logo"
      />
    </div>
  );
}

export default Nav;
