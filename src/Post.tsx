import * as React from 'react';
import {PostReducer, INITIAL_STATE} from "./postReducer";


const Post = () => {
  /// USING REDUCER

const [state, dispatch] = React.useReducer(PostReducer, INITIAL_STATE)

const handleFetch = () => {
  dispatch({type: "FETCH_START", payload: {}});
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((res) => res.json())
    .then((data) => {  
      dispatch({type: "FETCH_SUCCESS", payload: data});
    })
    .catch((err) => {
      dispatch({type: "FETCH_ERROR", payload: {}});
    });
};

return (
  // USING USEREDUCER

  <div>
    <button onClick={handleFetch}>
      {state.loading ? "Wait..." : "Fetch the post"}
    </button>
    <p>{state.post?.title}</p>
    <span>{state.error && "Something went wrong!"}</span>
  </div>
)

}


// const Post = () => {
//     /// USING USESTATE

// const [loading, setLoading] = React.useState(false);
// const [error, setError] = React.useState(false);
// const [post, setPost] = React.useState({});

//   const handleFetch = () => {
//     setLoading(true);
//     setError(false);
//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//       .then((res) => res.json())
//       .then((data) => {
//         setLoading(false);
//         setPost(data);
//       })
//       .catch((err) => {
//         setLoading(false);
//         setError(true);
//       });
//   };

//   return (
//     // USING USESTATE

//     <div>
//       <button onClick={handleFetch}>
//         {loading ? "Wait..." : "Fetch the post"}
//       </button>
//       <p>{post?.title}</p>
//       <span>{error && "Something went wrong!"}</span>
//     </div>
//   )

// }

export default Post;