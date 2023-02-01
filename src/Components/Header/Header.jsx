import "./style.css";
import { motion, AnimatePresence } from "framer-motion";

const popupVariants = {
  closed: {
    opacity: 0,
  },
  open: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 1.5,
    },
  },
};
const slideVariants = {
  out: {
    x: "100vw",
  },
  in: {
    x: 0,
    transition: {
      duration: 1,
    },
  },
  exit: {
    x: "100vw",
    transition: {
        duration: 1,
    },
  },
};
const headerVariants = {
    initial :{
        y : '-30vh'
    },
    final :{
        y : 0,
        transition: {
            delay: 0.5,
            duration : 2
        }
    }
}

const Header = ({ isClicked, setClick }) => {
  const mobileMenuHandler = () => setClick(!isClicked);
  return (
    <header>
      <motion.div className="header"
      variants={headerVariants}
      initial = "initial"
      animate="final"
      >
        <div className="logo">
          <img src="/assets/GPT-3.svg" alt="logo" className="" />
        </div>
        <div className="desktop-links desktop">
          <div className="links">
            <a href="#" className="">
              Home
            </a>
            <a href="#" className="">
              What is GPT?
            </a>
            <a href="#" className="">
              Open AI
            </a>
            <a href="#" className="">
              Case Study
            </a>
            <a href="#" className="">
              Library
            </a>
          </div>
          <div className="btn">
            <a href="#" className="" style={{ marginLeft: "0" }}>
              Sign in
            </a>
            <button className="signup">Sign up</button>
          </div>
        </div>
        <div className="mobile-tiles mobile">
          <i className="fa-solid fa-bars fa-2x" onClick={mobileMenuHandler}></i>
        </div>
      </motion.div>
      <AnimatePresence>
      {isClicked ? (
        <motion.div
          className="popup mobile"
          variants={popupVariants}
          initial = "closed"
          animate="open"
          key= "hinokami"
          exit = "exit"
        >
          <div className="nothing" onClick={mobileMenuHandler}></div>
          <motion.div
            className="slidein"
            variants={slideVariants}
            initial = "out"
            animate= "in"
            key = "kagura"
            exit = "exit"
          >
            <div className="x">
              <i
                className="fa-solid fa-xmark fa-2x"
                onClick={mobileMenuHandler}
              ></i>
            </div>
            <div className="a-gc">
              <div className="a">
                <a href="#" className="">
                  Home
                </a>
              </div>
              <div className="a">
                <a href="#" className="">
                  What is GPT?
                </a>
              </div>
              <div className="a">
                <a href="#" className="">
                  Open AI
                </a>
              </div>
              <div className="a">
                <a href="#" className="">
                  Case Study
                </a>
              </div>
              <div className="a">
                <a href="#" className="">
                  Library
                </a>
              </div>
              <div className="a mobile-btn bdr">
                <button className="btn1">Sign in</button>
                <button className="btn2">Sign up</button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : (
        <></>
      )}
      </AnimatePresence>
    </header>

  );
};

export default Header;
