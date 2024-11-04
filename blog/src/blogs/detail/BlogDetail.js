import { useParams } from "react-router-dom";
import useFetch from "custom-hooks/useFetch";
import { useNavigate } from "react-router-dom";

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: blog, error } = useFetch(`http://localhost:8000/blogs/${id}`);
  const handleClick = (event) => {
    const blog_id = event.target.dataset.blogId;
    fetch(`http://localhost:8000/blogs/${id}`, {
      method: "DELETE",
    }).then(() => {
      console.log("Blog deleted");
      navigate("/");
    });
  };
  return (
    <div className="blog-list">
      {error && <div className="loading-msg">{error}</div>}
      {blog && (
        <>
          <h2 className="blog-title">{blog.title}</h2>
          <p className="blog-author">by {blog.author}</p>
          <p className="blog-body">{blog.body}</p>
        </>
      )}
      <button onClick={handleClick}>Delete blog</button>
    </div>
  );
};

export default BlogDetail;
