import { Link } from "react-router-dom";
export const BlogList = ({ blogs, setBlogs, title }) => {
  const deleteBlog = (event) => {
    event.preventDefault();
    const id = event.target.dataset.blogId;
    // eslint-disable-next-line
    setBlogs(blogs.filter((blog) => blog.id != id));
  };
  return (
    <div className="blog-list">
      <h1 className="title">{title}</h1>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blog/${blog.id}`} style={{ textDecoration: "none" }}>
            <h1>{blog.title}</h1>
            <p className="author">by {blog.author}</p>
          </Link>
          <button
            className="delete-btn"
            data-blog-id={blog.id}
            onClick={deleteBlog}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};
