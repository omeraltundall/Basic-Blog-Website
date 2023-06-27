import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch('http://localhost:8000/blogs/' + id);
  const goRootHistory = useHistory();

  const handleDeleteBlog = () => {
    fetch('http://localhost:8000/blogs/' + blog.id,{
      method: 'DELETE',
    }).then(()=>{
      goRootHistory.push('/')
    })
  }

  return (
    <div className="blog-details">
      {isPending ?(<div>Loading...</div>):null}
      {error ?(<div>{error}</div>):null}
      {blog ? (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleDeleteBlog}>Delete</button>
        </article>
      ):null}
    </div>
  );
};

export default BlogDetails;

