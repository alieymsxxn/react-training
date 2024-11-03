import { useState } from "react";
import { BlogList } from "../blogs/BlogList";
import useFetch from "custom-hooks/useFetch";

const Home = () => {
    const [title] = useState('All about animals');
    const { data: blogs, setData: setBlogs, error } = useFetch('http://localhost:8000/blogs');

    return (
        <div className="home">
            {error && <div className="loading-msg">{error}</div>}
            {!error && !blogs && <div className="loading-msg">Loading blogs...</div>}
            {blogs && <BlogList blogs={blogs} setBlogs={setBlogs} title={title} />}
        </div>
    )
}

export default Home;