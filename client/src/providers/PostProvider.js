import React, { useState } from "react";

export const PostContext = React.createContext();

export const PostProvider = (props) => {
  const [posts, setPosts] = useState([]);

  const getAllPosts = () => {
    return fetch("/api/post")
      .then((res) => res.json())
      .then(setPosts);
  };

  const addPost = (post) => {
    return fetch("/api/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    });
  };

  const searchPosts = (term) => {
    return fetch("/api/post/search", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(term)
    })
  }

  return (
    <PostContext.Provider value={{ posts, getAllPosts, addPost }}>
      {props.children}
    </PostContext.Provider>
  );
};
