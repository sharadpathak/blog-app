import { useState } from "react";
import { useHistory } from "react-router";

const Create = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [body, setBody] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();
   const handleSubmit = (e) => {
        e.preventDefault();
        const  blog = {title, body, author};
        setLoading(true);
        fetch(`http://localhost:8000/blogs`, {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body:   JSON.stringify(blog)
        }).then((data) => {
            console.log('dd', data)
            setLoading(false);
            history.push('/')
        })
    }
    

    return (  
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title</label>
                <input type="text" value={title} onChange={ (e) => setTitle(e.target.value)} required />
                <label>Body </label>
                <textarea required  value={body} onChange={ (e) => setBody(e.target.value)}></textarea>
                <label>Author</label>
                <select value={author} onChange={ (e) => setAuthor(e.target.value)}>
                    <option value="mario">Mario</option>
                    <option value="joshi">Joshi</option>
                </select>
                {loading && <button disabled>Loading...</button>}
                {!loading && <button>Add Blog</button>}
            </form>
        </div>
    );
}
 
export default Create;