import BlogList from "./components/BlogList";
import useFetch from "./useFetch";

const Home = () => {

  const {data: blogs , isPending, error} = useFetch("http://localhost:8000/blogs")
  

  return (
    <div className="home">
      <h2 className="book">Book by Author</h2>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title={"All Blogs"} />}
    </div>
  );
};

export default Home;
