import "./style.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer1">
          <h1>Do you want to step in to the future before others</h1>
          <div className="f-btn">
            <button>Request Early Access</button>
          </div>
        </div>
        <div className="footer2">
          <div className="f-1 address">
            <div className="f-logo">
              <img
                src="/assets/footerLogo.svg"
                alt="footer logo"
                className=""
              />
            </div>
            <p>
              Crechterwoord K12 182 DK <br />
              Alknjkcb, All Rights Reserved
            </p>
          </div>
          <div className="f-1">
            <div className="under-f">
              <h5>Links</h5>
              <a href="#" className="">
                Overons
              </a>
              <a href="#" className="">
                Social Media
              </a>
              <a href="#" className="">
                Counters
              </a>
              <a href="#" className="">
                Contact
              </a>
            </div>
          </div>
          <div className="f-1">
            <div className="under-f">
              <h5>Company</h5>
              <a href="#" className="">
                Terms & Conditions
              </a>
              <a href="#" className="">
                Privacy Policy
              </a>
              <a href="#" className="">
                Contact
              </a>
            </div>
          </div>
          <div className="f-1">
            <div className="under-f">
              <h5>Get in touch</h5>
              <p>Crechterwoord K12 <br /> 182 DK Alknjkcb</p>
              <a href="#" className="">
                085-132567
              </a>
              <a href="#" className="">
                info@payme.net
              </a>
            </div>
          </div>
        </div>
        <div className="footer3">
          <p>© 2021 GPT-3. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
