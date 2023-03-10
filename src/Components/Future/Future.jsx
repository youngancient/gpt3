import "./style.css";
import { motion } from "framer-motion";

const fVariants ={
  initial :{
    y: "-105px",
    opacity : 0,
  },
  final:{
    y: 0,
    opacity : 1,
    transition:{
      delay : 0.5,
      duration: 1.5,
      staggerChildren: 0.2,
      delayChildren: 0.3,
    }
  }
}

const Future = ({name, note}) => {
  return (
    <div className="future">
      <motion.div className="f-inner"
      variants={fVariants}
      initial = "initial"
      whileInView= "final"
      viewport={{ once: true }}
      >
        <div className="f-head">
          <svg
            width="38"
            height="3"
            viewBox="0 0 38 3"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="38" height="3" fill="white" />
            <rect width="38" height="3" fill="url(#paint0_linear_0_37)" />
            <defs>
              <linearGradient
                id="paint0_linear_0_37"
                x1="-4.8169"
                y1="-0.566667"
                x2="0.725275"
                y2="15.9299"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#AE67FA" />
                <stop offset="0.973958" stopColor="#F49867" />
              </linearGradient>
            </defs>
          </svg>
          <h3>{name}</h3>
        </div>
        <p>{note}</p>
      </motion.div>
    </div>
  );
};

export default Future;
