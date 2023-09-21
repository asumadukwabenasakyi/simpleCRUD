import React from "react";
import { useGetPostsQuery } from "../api";

function PostList() {
  const { data: posts, isError, isLoading } = useGetPostsQuery();


  if (isLoading) {
   return <p>Loading ...</p>
  }

  if (isError) {
   return <p>Error loading posts</p>
  }

  return (
   <div>
      <h2>Posts</h2>

      <ul>
         {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
         ))}
      </ul>
   </div>
  )
}
export default PostList;