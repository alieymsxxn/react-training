import { useParams } from "react-router-dom";
import useFetch from "custom-hooks/useFetch";

const BlogDetail = () => {
  const { id } = useParams();
  const {
    data: blog,
    error,
  } = useFetch(`http://localhost:8000/blogs/${id}`);
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
    </div>
  );
};

export default BlogDetail;
