import "./style.css";

const Blog = ({ image, date, name, alt }) => {
  return (
    <div className="blog">
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
    </div>
  );
};

export default Blog;
