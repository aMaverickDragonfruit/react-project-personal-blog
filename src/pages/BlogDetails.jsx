import { useHistory, useParams } from "react-router-dom";
import fetchURL from "../fetchURL";
import useFetch from "../hooks/useFetch";
import {deleteAPI} from "../api/deleteAPI";

const BlogDetails = () => {
    const BASE_URL = fetchURL();
    const {id} = useParams();
    const blogURL = `${BASE_URL}/${id}`;
    const {data : blog, isPending, error} = useFetch(blogURL);
    const history = useHistory();

    const handleClick = () => {
        deleteAPI(blogURL).then(() => {
            history.push("/");
        })
    }
    return (
        <div className="blog-details">
            {error && <div>{error}</div>}
            {isPending && <div>Loading</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p className="blog-category">Category: {blog.category}</p>
                    <button className="btn__del" onClick={handleClick}>Delete this blog</button>
                    <p>{blog.body}</p>
                </article>
            )}

            {/* blog can be destructured, but the bode is more repetitive*/}
            {/* {blog && (
                <article>
                    {(() => {
                        const { title, author, body } = blog;
                        return (
                            <>
                                <h2>{title}</h2>
                                <p className="blog-author">{author}</p>
                                <p>{body}</p>
                            </>
                        );
                    })()}
                </article>
            )} */}
        </div>
    );
}

export default BlogDetails;