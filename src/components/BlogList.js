import {Link} from 'react-router-dom';

const BlogList = ({blogs, title}) => {
  return (
    <div>
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview booklist" key={blog.id}>
        <Link to={`/blogs/${blog.id}`}><strong>
            {blog.title} written by {blog.author}{" "}
          </strong>          
        </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
