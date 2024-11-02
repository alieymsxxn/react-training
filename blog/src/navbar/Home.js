import {useState, useEffect} from "react";
import {BlogList} from "../blogs/BlogList";
import BlogListClass from "../blogs/BlogListClass";

const Home = () => {
    const [title, setTitle] = useState('All your blogs');
    const [blogs, setBlogs] = useState([
        {
            id: 1,
            title: 'My First Blog',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
            author: 'mario'
        },
        {
            id: 2,
            title: 'Welcome to the Party!',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
            author: 'yoshi'
        },
        {
            id: 3,
            title: 'Web Dev Top Tips',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
            author: 'mario'
        }
    ]);
    useEffect(() => {
        // console.log('Hey')
    }, [title, blogs])
    return (
        <div className="home">
            {/* <BlogList blogs={blogs} setBlogs={setBlogs} title={title} setTitle={setTitle}/> */}
            <BlogListClass blogs={blogs} setBlogs={setBlogs} title={title} setTitle={setTitle}/>
        </div>
    )
}

export default Home;