import "./style.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const keyVariants = {
  initial: {
    x : "-50vw"
  },
  final :{
    x : 0,
    transition:{
      delay : 1 ,
      duration: 1,
      staggerChildren: 0.1,
      delayChildren: 0.1,
    }
  },
  svg_init: {
    width: 0,
  },
  svg_final: {
    width: 38,
    transition: {
      delay: 1.5,
      duration: 3,
    },
  },
}

const Key = ({ name, note}) => {
  const { ref: myRef, inView: keyView } = useInView();
  return (
    <div className="key-h" ref={myRef}>
      <motion.div className="key"
      variants={keyVariants}
      initial = "initial"
      animate = {keyView ? "final" : ""}
      >
        <motion.svg
          variants={keyVariants}
          initial = "svg_init"
          animate = {keyView ? "svg_final" : ""}
          width="0"
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
        </motion.svg>
        <h3>{name}</h3>
        <p className="">{note}</p>
      </motion.div>
    </div>
  );
};

export default Key;
