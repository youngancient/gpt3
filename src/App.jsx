import { useState, useEffect } from "react";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import HashLoader from "react-spinners/HashLoader";
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence } from "framer-motion";


const loaderVariant = {
  exit:{
    opacity: 0,
    transition :{
      duration : 2
    }
  }
}

function App() {
  const [isClicked, setClick] = useState(false);
  const { ref: mainRef, inView: mainInView } = useInView();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1200);
  }, []);

  return (
    <div className="App">
      <AnimatePresence>
      {isLoading ? (
        <motion.div className="loader"
        variants={loaderVariant}
          key= "hinokami"
          exit = "exit"
        >
          <HashLoader color={'#ae67fa'} size={80} />
        </motion.div>
      ) : (
        <motion.div className=""
        key= "kagura"
        >
          <Header
            isClicked={isClicked}
            setClick={setClick}
            inView={mainInView}
          />
          <div className="" ref={mainRef}>
            <Main />
          </div>
          <Footer />
        </motion.div>
      )}
      </AnimatePresence>
    </div>
  );
}

export default App;
