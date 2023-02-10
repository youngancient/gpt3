import "./style.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const blogVariants = {
  initial :{
    scale : 0
  },
  final :{
    scale : 1,
    transition : {
      duration: 1
    }
  }
}

const Blog = ({ image, date, name, alt }) => {
  const { ref: blogRef, inView: blogInView } = useInView();
  return (
    <motion.div className="blog"
    variants={blogVariants}
    ref={blogRef}
    initial = "initial"
    animate = { blogInView ? "final" : ""}
    >
      <div className="blog-img">
        <img src={image} alt={alt} className="" />
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
