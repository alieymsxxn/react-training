import { useState } from "react";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const blog = { title, author, body };
    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("Blog saved");
    });
  };

  return (
    <div className="blog-list">
      <h1 className="blog-title">Create a blog</h1>
      <form onSubmit={handleSubmit}>
        <label className="blog-author">Blog title</label>
        <input
          className="blog-preview"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        ></input>
        <label className="blog-author">Blog author</label>
        <select
          className="blog-preview"
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
        >
          <option value="Somebody">Somebody</option>
          <option value="Flamingo">Flamingo</option>
          <option value="yoshi">yoshi</option>
        </select>
        <label className="blog-author">Blog body</label>
        <textarea
          className="blog-body"
          value={body}
          onChange={(event) => setBody(event.target.value)}
        ></textarea>
        <button className="delete-btn">Add blog</button>
      </form>
    </div>
  );
};

export default CreateBlog;
