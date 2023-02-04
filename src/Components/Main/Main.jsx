import "./style.css";
import { keyData, futureData, blogData } from "../../Utils/Data";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { useForm, Controller } from "react-hook-form";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Key from "../Keys/Key";
import Future from "../Future/Future";
import Blog from "../Blog/Blog";
import { useState } from "react";

const heroVariants = {
  text_init: {
    opacity: 0,
    x: "100px",
  },
  img_init: {
    x: "-100px",
    opacity: 0,
  },
  final: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 1,
    },
  },
};

const whatVariants = {
  text_init: {
    opacity: 0,
    x: "100px",
  },
  img_init: {
    x: "-100px",
    opacity: 0,
  },
  final: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 1,
    },
  },
  bg_init: {
    background: "rgba(0, 0, 0, 0)",
  },
  showbg: {
    background: "#042c54",
    transition: {
      delay: 1,
      duration: 2,
    },
  },
  svg_init: {
    width: 0,
  },
  svg_final: {
    width: 38,
    transition: {
      duration: 2,
    },
  },
};

const futureVariants = {
  one_init: {
    opacity: 0,
    x: "-100vw",
  },
  two_init: {
    x: "100vw",
    opacity: 0,
  },
  final: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 1,
      duration: 2,
    },
  },
};

const btnVariants = {
  initial: {
    x: "-100vw",
  },
  final: {
    x: 0,
    transition: {
      delay: 1,
      duration: 3,
      type: "spring",
      stiffness: 300,
    },
  },
};
const blogContVariants = {
  initial: {
    opacity: 0,
  },
  final: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
      duration: 1,
    },
  },
};

const Main = () => {
  const [text] = useTypewriter({
    words: ["Thoughts", "Imagination"],
    loop: {},
  });
  const { ref: myRef, inView: possibleInView } = useInView();
  const { ref: myBgRef, inView: bgInView } = useInView();
  const { ref: futureRef, inView: futureInView } = useInView();
  const { ref: regRef, inView: regInView } = useInView();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
    defaultValues: {
      email: "",
    },
  });

  // state controlling email input
  const [email, setEmail] = useState("");
  const onFormSubmit = (data) => {
    // use data for API stuff
    console.log(data.email);
    setEmail("");
  };
  const handleError = (errors) => {};
  const handleChange =(event)=>{
    setEmail(event.target.value.trim())
  }
  const handleMail = (email) => {
    setEmail(email.trim());
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (mailformat.test(email)) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <main>
      <div className="main">
        <motion.div className="hero">
          <motion.div
            className="hero-img"
            variants={heroVariants}
            initial="img_init"
            animate="final"
          >
            <img src="/assets/AI.svg" alt="ai image" className="" />
          </motion.div>
          <motion.div
            className="hero-txt"
            variants={heroVariants}
            initial="text_init"
            animate="final"
          >
            <h1>Let’s Build Something amazing with GPT-3 OpenAI</h1>
            <p className="txt-p">
              Yet bed any for travelling assistance indulgence unpleasing. Not
              thoughts all exercise blessing. Indulgence way everything joy
              alteration boisterous the attachment. Party we years to order
              allow asked of.
            </p>
            <form onSubmit={handleSubmit(onFormSubmit, handleError)} noValidate>
              <div className="hero-form">
                <input
                  type="email"
                  name=""
                  id=""
                  value={email}
                  onChange={handleChange}
                  placeholder="your email address"
                  {...register("email", {
                    required: true,
                    validate: handleMail,
                  })}
                />
                {errors.email && errors.email.type === "required" && (
                  <p className="error mobile-error">Email is required</p>
                )}
                {errors.email && errors.email.type === "validate" && (
                  <p className="error mobile-error">Invalid Email</p>
                )}
                <div className="hero-btn">
                  <button>Get Started</button>
                </div>
              </div>
              {errors.email && errors.email.type === "required" && (
                  <p className="error desktop-error">Email is required</p>
                )}
                {errors.email && errors.email.type === "validate" && (
                  <p className="error desktop-error">Invalid Email</p>
                )}
            </form>
            <div className="users">
              <div className="users-img">
                <img src="/assets/user4.svg" alt="user 1" className="" />
                <img src="/assets/user5.svg" alt="user 2" className="" />
                <img src="/assets/user4.svg" alt="user 1" className="" />
                <img src="/assets/user5.svg" alt="user 2" className="" />
                <img src="/assets/user4.svg" alt="user 1" className="" />
                <img src="/assets/user5.svg" alt="user 2" className="" />
              </div>
              <p className="content">
                1,600 people requested access a visit in last 24 hours
              </p>
            </div>
          </motion.div>
        </motion.div>
        <div className="partners">
          <div className="img">
            <img src="/assets/atlassian.svg" alt="atlasian" className="" />
          </div>
          <div className="img">
            <img src="/assets/dropbox.svg" alt="dropbox" className="" />
          </div>
          <div className="img">
            <img src="/assets/google.svg" alt="google" className="" />
          </div>
          <div className="img">
            <img src="/assets/shopify.svg" alt="shopify" className="" />
          </div>
          <div className="img">
            <img src="/assets/slack.svg" alt="slack" className="" />
          </div>
        </div>
        <div className="what">
          <motion.div
            className="what-inner"
            ref={myBgRef}
            variants={whatVariants}
            initial="bg_init"
            animate={bgInView ? "showbg" : ""}
          >
            <div className="ans1">
              <div className="head">
                <motion.svg
                  variants={whatVariants}
                  initial="svg_init"
                  animate={bgInView ? "svg_final" : ""}
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

                <h4>What is GPT-3</h4>
              </div>
              <p>
                We so opinion friends me message as delight. Whole front do of
                plate heard oh ought. His defective nor convinced residence own.
                Connection has put impossible own apartments boisterous. At
                jointure ladyship an insisted so humanity he. Friendly bachelor
                entrance to on by.
              </p>
            </div>
            <div className="ans2">
              <h3 className="h3">
                The possibilities are beyond your
                <strong>
                  {text}
                  <Cursor cursorColor="#ff4820" />
                </strong>
              </h3>
              <div className="sub">
                <a href="#" className="cool-link">
                  Explore The Library
                </a>
              </div>
            </div>
            <div className="ans3">
              {keyData.map((keys) => (
                <Key name={keys.name} note={keys.note} key={keys.key} />
              ))}
            </div>
          </motion.div>
        </div>

        <div className="futures">
          <div className="futures-inner" ref={futureRef}>
            <motion.div
              className="future"
              variants={futureVariants}
              initial="one_init"
              animate={futureInView ? "final" : ""}
            >
              <h3 className="h3">
                The Future is Now and You Just Need To Realize It. Step into
                Future Today & Make it Happen.
              </h3>
              <div className="f-a">
                <a href="#" className="cool-link">
                  Request Early Access to Get Started
                </a>
              </div>
            </motion.div>
            <motion.div
              className="future2"
              variants={futureVariants}
              initial="two_init"
              animate={futureInView ? "final" : ""}
            >
              {futureData.map((future) => (
                <Future
                  name={future.name}
                  note={future.note}
                  key={future.key}
                />
              ))}
            </motion.div>
          </div>
        </div>

        <div className="possible">
          <div className="possible-inner" ref={myRef}>
            <motion.div
              className="img-possible"
              variants={whatVariants}
              initial="text_init"
              animate={possibleInView ? "final" : ""}
            >
              <img src="/assets/ladyUser.webp" alt="vr user" className="" />
            </motion.div>
            <motion.div
              className="possible-txt"
              variants={whatVariants}
              initial="img_init"
              animate={possibleInView ? "final" : ""}
            >
              <div className="f-a desktop">
                <a
                  href="#"
                  className=""
                  style={{ color: "#71E5FF", borderBottom: 0 }}
                >
                  Request Early Access to Get Started
                </a>
              </div>
              <h3 className="h3">
                The possibilities are beyond your imagination
              </h3>
              <p>
                Yet bed any for travelling assistance indulgence unpleasing. Not
                thoughts all exercise blessing. Indulgence way everything joy
                alteration boisterous the attachment. Party we years to order
                allow asked of.
              </p>
              <div className="f-a">
                <a href="#" className="">
                  Request Early Access to Get Started
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="register" ref={regRef}>
          <div className="register-inner">
            <div className="rg1">
              <a href="#" className="">
                Request Early Access to Get Started
              </a>
              <h4>
                Register today & start exploring the endless possiblities.
              </h4>
            </div>
            <div className="rg2">
              <motion.button
                variants={btnVariants}
                initial="initial"
                animate={regInView ? "final" : ""}
              >
                Get Started
              </motion.button>
            </div>
          </div>
        </div>

        <div className="blogs">
          <div className="blogs-inner">
            <h1>
              A lot is happening, <br />
              We are blogging about it.
            </h1>
            <motion.div
              className="blogs-cont"
              variants={blogContVariants}
              initial="initial"
              animate="final"
            >
              {blogData.map((blog) => (
                <Blog
                  name={blog.name}
                  alt={blog.alt}
                  date={blog.date}
                  image={blog.image}
                  key={blog.key}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
