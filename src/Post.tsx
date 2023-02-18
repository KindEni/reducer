import * as React from 'react';


const Post = () => {
    /// USING USESTATE

const [loading, setLoading] = React.useState(false);
const [error, setError] = React.useState(false);
const [post, setPost] = React.useState({});

  const handleFetch = () => {
    setLoading(true);
    setError(false);
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setPost(data);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
      });
  };

  return (
    // USING USESTATE

    <div>
      <button onClick={handleFetch}>
        {loading ? "Wait..." : "Fetch the post"}
      </button>
      <p>{post?.title}</p>
      <span>{error && "Something went wrong!"}</span>
    </div>
  )

}

export default Post;