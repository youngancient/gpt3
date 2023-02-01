import "./style.css";
import { keyData, futureData, blogData } from "../../Utils/Data";
import Key from "../Keys/Key";
import Future from "../Future/Future";
import Blog from "../Blog/Blog";

const Main = () => {
  return (
    <main>
      <div className="main">
        <div className="hero">
          <div className="hero-img">
            <img src="/assets/AI.svg" alt="ai image" className="" />
          </div>
          <div className="hero-txt">
            <h1>Let’s Build Something amazing with GPT-3 OpenAI</h1>
            <p className="txt-p">
              Yet bed any for travelling assistance indulgence unpleasing. Not
              thoughts all exercise blessing. Indulgence way everything joy
              alteration boisterous the attachment. Party we years to order
              allow asked of.
            </p>
            <form>
              <div className="hero-form">
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="your email address"
                />
                <p className="error mobile-error">Error here</p>
                <div className="hero-btn">
                  <button>Get Started</button>
                </div>
              </div>
              <p className="error desktop-error">Error here</p>
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
          </div>
        </div>
        <div className="partners">
          <img
            src="/assets/atlassian.svg"
            alt="atlasian"
            className=""
            style={{ marginLeft: "0" }}
          />
          <img src="/assets/dropbox.svg" alt="dropbox" className="" />
          <img src="/assets/google.svg" alt="google" className="" />
          <img src="/assets/shopify.svg" alt="shopify" className="" />
          <img src="/assets/slack.svg" alt="slack" className="" />
        </div>
        <div className="what">
          <div className="what-inner">
            <div className="ans1">
              <div className="head">
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
                      <stop stop-color="#AE67FA" />
                      <stop offset="0.973958" stop-color="#F49867" />
                    </linearGradient>
                  </defs>
                </svg>

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
                The possibilities are beyond your Imagination
              </h3>
              <div className="sub">
                <a href="#" className="cool-link">
                  Explore The Library
                </a>
              </div>
            </div>
            <div className="ans3">
              {keyData.map((keys) => (
                <Key name={keys.name} note={keys.note} />
              ))}
            </div>
          </div>
        </div>

        <div className="futures">
          <div className="futures-inner">
            <div className="future1">
              <h3 className="h3">
                The Future is Now and You Just Need To Realize It. Step into
                Future Today & Make it Happen.
              </h3>
              <div className="f-a">
                <a href="#" className="cool-link">
                  Request Early Access to Get Started
                </a>
              </div>
            </div>
            <div className="future2">
              {futureData.map((future) => (
                <Future name={future.name} note={future.note} />
              ))}
            </div>
          </div>
        </div>

        <div className="possible">
          <div className="possible-inner">
            <div className="img-possible">
              <img src="/assets/ladyUser.webp" alt="vr user" className="" />
            </div>
            <div className="possible-txt">
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
            </div>
          </div>
        </div>

        <div className="register">
          <div className="register-inner bdr">
            <div className="rg1">
              <a href="#" className="">
                Request Early Access to Get Started
              </a>
              <h4>
                Register today & start exploring the endless possiblities.
              </h4>
            </div>
            <div className="rg2">
              <button>Get Started</button>
            </div>
          </div>
        </div>

        <div className="blogs">
          <div className="blogs-inner">
            <h1>A lot is happening, <br/>We are blogging about it.</h1>
            <div className="blogs-cont">
                {blogData.map((blog) =>(
                  <Blog name={blog.name} alt={blog.alt} date={blog.date} image={blog.image} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
