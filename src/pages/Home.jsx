import BlogList from "../components/BlogList";
import useFetch from "../hooks/useFetch";
import fetchURL from "../fetchURL";


const Home = () => {
  const BASE_URL = fetchURL();

  const {data: blogs, isPending, error} = useFetch(BASE_URL);

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title = "All Blogs" />}
    </div>
  );
};

export default Home;
