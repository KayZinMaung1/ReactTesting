import { useEffect } from "react";
import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs,setblogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]     
    )

    const [name, setName] = useState('Mario');

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setblogs(newBlogs);
    }
    
    useEffect(() => {
        console.log("UseEffect Run");
        console.log({blogs});
    },[name])

    return (  
        <div className="home">
           <BlogList blogs={blogs} title='All Blogs' handleDelete={handleDelete}/>
           <button onClick={() => setName('Luigi')}>Change Name</button>
           <p>{name}</p>
        </div>
    );
}

export default Home;