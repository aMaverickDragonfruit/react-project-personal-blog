import BlogList from "./BlogList";
import useFetch from "./useFetch";
import fetchURL from "./api/fetchURL";


const Home = () => {
  const BASE_URL = fetchURL();

  const {data: blogs, isPending, error} = useFetch(BASE_URL);

  function handleDelete(id) {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  }


  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title = "All Blogs" handleDelete={handleDelete} />}
      {/* <BlogList
        blogs={blogs.filter((blog) => blog.author === "McFly")}
        title="McFly's blogs"
      /> */}
    </div>
  );
};

export default Home;
