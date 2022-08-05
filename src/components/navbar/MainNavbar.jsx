import classes from "./MainNavbar.module.css";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";

const BackDrop = styled(motion.div)`
  width: 100%;
  height: 4rem;
  position: absolute;
  z-index: 10;
  border-radius: 0 0 20px 20px;
  /* transform: rotate(60deg); */
  top: 0;
  right: 0;
  background: rgb(241, 196, 15);
  background: linear-gradient(
    58deg,
    rgba(241, 196, 15, 1) 20%,
    rgba(243, 172, 18, 1) 100%
  );
`;

const backdropVariants = {
  expanded: {
    width: "100%",
    height: "100vh",
  },
  collapsed: {
    width: "100%",
    height: "4rem",
  },
};

const expandingTransition = {
  type: "spring",
  duration: 2.3,
  stiffness: 30,
};

const MainNavbar = () => {
  const [isExpanded, setExpanded] = useState(false);

  const playExpandingAnimation = () => {
    setExpanded(true);
    setTimeout(() => {
      setExpanded(false);
    }, expandingTransition.duration * 1000 - 1500);
  };

  return (
    <div className={classes.container}>
      <BackDrop
        initial={false}
        animate={isExpanded ? "expanded" : "collapsed"}
        variants={backdropVariants}
        transition={expandingTransition}
      />
      <nav className={classes.topContainer}>
        <div className={classes.profile}>
          <img
            src="./../../utils/images/photo_2022-05-27_19-40-08.jpg"
            alt=""
            className={classes.img}
          />
          <div className={classes.info}>
            <p>UserName</p>
          </div>
        </div>
       
      </nav>
    </div>
  );
};

export default MainNavbar;
