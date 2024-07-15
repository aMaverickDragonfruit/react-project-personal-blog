import { useParams } from "react-router-dom";
import fetchURL from "./api/fetchURL";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const BASE_URL = fetchURL();
    const {id} = useParams();
    const blogURL = `${BASE_URL}/${id}`;
    const {data : blog, isPending, error} = useFetch(blogURL);

    return (
        <div className="blog-details">
            {/* <h2>blog detail - {id}</h2> */}
            {error && <div>{error}</div>}
            {isPending && <div>Loading</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p className="blog-category">Category: {blog.category}</p>
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