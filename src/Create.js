import { useState } from "react";
import { useHistory } from "react-router-dom";
const Create = () => {
    const [title,setTitle] = useState('');
    const [body,setBody] =useState('');
    const [author,setAuthor] = useState('mario');
    const history = useHistory();

    const handleSubmit = (e) => {
       e.preventDefault();
       const blog= {title,body,author};
       console.log(blog);
       fetch('http://localhost:8000/blogs/',{
           method: 'POST',
           headers:{"Content-Type":"application/json"},
           body:JSON.stringify(blog)
       }).then(
           ()=>{
               console.log("New blog Added");
               history.push('/');
           }
       )
    }
     
    return ( 
        <div className="create">
            <div>Add New Blog</div>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input
                type='text'
                required
                value={title}
                onChange={(e)=> setTitle(e.target.value)}
                >
                </input>
                <label>Blog body:</label>
                <textarea
                required
                value={body}
                onChange={(e)=> setBody(e.target.value)}
                >

                </textarea>
                <label>Blog author</label>
                <select
                value={author}
                onChange={(e)=>setAuthor(e.target.value)}
                >
                    <option value="mario">Mario</option>
                    <option value="yoshi">Yoshi</option>
                </select>
                <button>Add Blog</button>
            </form>
           
        </div>
     );
}
 
export default Create;