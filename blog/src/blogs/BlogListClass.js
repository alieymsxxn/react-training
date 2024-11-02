import React from 'react';

class BlogListClass extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
      this.addBlog = this.addBlog.bind(this);
      this.modifyTitle = this.modifyTitle.bind(this);
      this.deleteBlog = this.deleteBlog.bind(this);
    }

    addBlog = (event) => {
        event.preventDefault();
        const id = this.props.blogs[this.props.blogs.length - 1].id + 1;
        this.props.setBlogs([...this.props.blogs, {
            id: id, 
            title: 'New Blog', 
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...', 
            author: 'mario'
        }]);
    }

    modifyTitle = () => {
        this.props.setTitle('Blogs list');
    }

    deleteBlog = (event) => {
        event.preventDefault();
        const id = event.target.dataset.blogId;
        this.props.setBlogs(this.props.blogs.filter(blog => blog.id != id));
    }

    render() {
      return (
        <>
        <h1 className="title">{this.props.title}</h1>
        {this.props.blogs.map((blog) => (
            <div className="blog-preview" key={blog.id}>
                <h1>{blog.title}</h1>
                <p className="author">{blog.author}</p>
                <button className="delete-btn" data-blog-id={blog.id} onClick={this.deleteBlog}>Delete</button>
            </div>
        ))}
        <button className="add-blog-btn" onClick={this.addBlog}>Add a blog</button>
        <button className="add-blog-btn" onClick={this.modifyTitle}>Modify Title</button>
        </>
      );
    }
}

export default BlogListClass;