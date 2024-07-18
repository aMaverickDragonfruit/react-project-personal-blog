import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import fetchURL from "../fetchURL";
import { postAPI } from "../api/postAPI";

export default function Create() {
    const BASE_URL = fetchURL();
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('Coding')
    const [body, setBody] = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, category};
        // console.log(blog) 
        setIsPending(true);

        postAPI(BASE_URL, blog).then(() => {
            setIsPending(false);
            history.push('/');
        })
        
    }

    return(
        <div className="create">
            <h2>Post a new blog</h2>
            <form onSubmit={handleSubmit}>
                <div className="create__blog-title">
                    <label>Blog title :</label>
                    <input 
                        type="text" 
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="create__blog-category">
                    <label>Category :</label>
                    <select 
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="Coding">Coding</option>
                        <option value="Design">Design</option>
                    </select>
                </div>
                <div className="create__blog-body">                
                    <label>Blog Body</label>
                    <textarea 
                        required
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    >
                    </textarea>
                </div>
                {isPending && <button disabled className="btn--post-new-blog">Posting...</button>}
                {!isPending && <button className="btn--post-new-blog">Post</button>}
            </form>
            {/* <h2>Testing</h2>
            <p>title: {title}</p>
            <p>category: {category}</p>
            <p>body: {body}</p> */}
        </div>
    );
};