import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] =useState('Mario');
    const [isPending, setIsPending] =useState(false);
    const goRootHistory = useHistory();

    const handleChange = (setState) => (event) => {
        setState(event.target.value);
    };

    const handleSubmit = (e) =>{
        e.preventDefault(); // preventDefault is for when submit button clicked the page will not refresh so all inputs that get from user are still shown at page
        const blog = {title, body, author};

        setIsPending(true);

        fetch('http://localhost:8000/blogs',{
            method:'POST',
            headers: { "Content-Type": "application/json"}, // here  we are sending data that json type 
            body: JSON.stringify(blog) // data that sending in this request
        }).then(() => {
            window.alert('New blog added');
            setIsPending(false);
            //history.go(-1); it is for going one page back
            goRootHistory.push('/')
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
                { !isPending ?<button>Add Blog</button>:null}
                {isPending ?<button disabled>Adding Blog...</button>:null}
            </form>
        </div>
     );
}
 
export default Create;