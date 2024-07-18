import {Link} from "react-router-dom";

const BlogList = ({ blogs, title, handleDelete }) => {
  return (
    <div className="blog-list">
      <h1>{title}</h1>
      {blogs.map((blog) => {
        const { title, category, id } = blog;
        return (
          <div className="blog-preview" key={id}>
            <Link to={`/blogs/${id}`}>
              <h2>{title}</h2>
            </Link>
            <p>Category: {category}</p>
          </div>
        );
      })}
    </div>
  );
};

export default BlogList;
