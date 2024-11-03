import { useState, useEffect } from "react";
import { BlogList } from "../blogs/BlogList";
import BlogListClass from "../blogs/BlogListClass";
import useFetch from "custom-hooks/useFetch";

const Home = () => {
    const [title, setTitle] = useState('All your blogs');
    const { data: blogs, setData: setBlogs, error } = useFetch('http://localhost:8000/blogs');

    return (
        <div className="home">
            {error && <div className="loading-msg">{error}</div>}
            {!error && !blogs && <div className="loading-msg">Loading blogs...</div>}
            {blogs && <BlogList blogs={blogs} setBlogs={setBlogs} title={title} setTitle={setTitle} />}
            {/* <BlogList blogs={blogs} setBlogs={setBlogs} title={title} setTitle={setTitle}/> */}
            {/* <BlogListClass blogs={blogs} setBlogs={setBlogs} title={title} setTitle={setTitle}/> */}
        </div>
    )
}

export default Home;