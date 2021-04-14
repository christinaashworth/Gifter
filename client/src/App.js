import React from "react";
import "./App.css";
import { PostProvider } from "./providers/PostProvider";
import { PostForm } from "./components/PostForm";
import { SearchPosts } from "./components/SearchPosts";
import PostList from "./components/PostList";

function App() {
  return (
    <div className="App">
      <PostProvider>
        <SearchPosts />
        <PostForm />
        <PostList />
      </PostProvider>
    </div>
  );
}

export default App;
