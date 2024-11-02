export const BlogList = ({blogs, setBlogs, title, setTitle}) => {
    const addBlog = (event) => {
        event.preventDefault();
        const id = blogs[blogs.length - 1].id + 1;
        setBlogs([...blogs, {id: id, title: 'New Blog', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...', author: 'mario'}])
    }
    const modifyTitle = () => {
        setTitle('Blogs list')
    }
    const deleteBlog = (event) => {
        event.preventDefault()
        const id = event.target.dataset.blogId
        setBlogs(blogs.filter(blog => blog.id != id))
    }
    return (
        <>
            <h1 className="title">{title}</h1>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h1>{blog.title}</h1>
                    <p className="author">{blog.author}</p>
                    <button className="delete-btn" data-blog-id={blog.id} onClick={deleteBlog}>Delete</button>
                </div>
            ))}
            <button className="add-blog-btn" onClick={addBlog}>Add a blog</button>
            <button className="add-blog-btn" onClick={modifyTitle}>Modify Title</button>
        </>
    )
}

