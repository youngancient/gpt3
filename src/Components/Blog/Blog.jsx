import "./style.css";
import { motion } from "framer-motion";

const blogVariants = {
  initial :{
    scale : 0.8,
    opacity : 0,
  },
  final :{
    scale : 1,
    opacity : 1,
    transition : {
      duration: 1
    }
  }
}

const Blog = ({ image, date, name, alt }) => {

  return (
    <motion.div className="blog"
    variants={blogVariants}
    initial = "initial"
    whileInView= "final"
    viewport={{ once: true }}
    >
      <div className="blog-img">
        <img src={image} alt={alt} className="" loading="lazy" />
      </div>
      <div className="txt-below">
        <p className="small">{date}</p>
        <div className="btw">
          <a href="#" className="name">
            {name}
          </a>
          <div className="b-a">
            <a href="#" className="small">
              Read Full Article
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Blog;
