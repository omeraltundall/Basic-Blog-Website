import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] =useState('Mario');
    const [isPending, setIsPending] =useState(false);
    const history = useHistory();

    const handleChange = (setState) => (event) => {
        setState(event.target.value);
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        const blog = {title, body, author};

        setIsPending(true);

        fetch('http://localhost:8000/blogs',{
            method:'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added');
            setIsPending(false);
            //history.go(-1); it is for going one page back
            history.push('/')
        })
    }

    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input 
                type="text" 
                required
                value={title}
                onChange={handleChange(setTitle)}/>
                <label>Blog body:</label>
                <textarea 
                required
                value={body}
                onChange={handleChange(setBody)}></textarea>
                <label>Blog author:</label>
                <select
                value={author}
                onChange={handleChange(setAuthor)}>
                    <option value="Mario">Mario</option>
                    <option value="Luigi">Luigi</option>
                    <option value="Yoshi">Yoshi</option>
                </select>
                { !isPending && <button>Add Blog</button>}
                {isPending && <button>Adding Blog...</button>}
            </form>
        </div>
     );
}
 
export default Create;