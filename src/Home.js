import { useEffect } from "react";
import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs,setblogs] = useState(null);
    const [isPending,setIsPending] = useState(true);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setblogs(newBlogs);
    }
    
    useEffect(() => {
      setTimeout(( ) => {
        fetch('http://localhost:8000/blogs')
        .then(res => {
            return res.json();
        })
        .then(data => {
            setIsPending(false);
            setblogs(data);
        })
      },1000)
    },[])

    return (  
        <div className="home">
            {isPending && <p>Loading...</p>}
           {blogs && <BlogList blogs={blogs} title='All Blogs' />}
           
        </div>
    );
}

export default Home;