import React, { useContext, useEffect, useState } from "react"
import { PostContext } from "../providers/PostProvider"
import { useHistory } from 'react-router-dom';

export const PostForm = () => {
  const { addPost } = useContext(PostContext)


const [post, setPost] = useState({
  title: "",
  imageUrl: "",
  caption: "",
  userProfileId: 0
})

const history = useHistory();

const handleControlledInputChange = (event) => {
  const newPost = { ...post }
  newPost[event.target.id] = event.target.value
  setPost(newPost)
}

const handleSavePost = () => {
  addPost({
    title: post.title,
    imageUrl: post.imageUrl,
    caption: post.caption,
    userProfileId: post.userProfileId
  })
}


return (
  <form className="postForm">
    <h2 className="postForm__title">Add Post</h2>
    <fieldset>
      <div className="form-group">
        <label htmlFor="title">Title: </label>
        <input type="text" id="title" required autoFocus className="form-control" placeholder="Title" onChange={handleControlledInputChange} value={post.title}/>
      </div>
    </fieldset>
    <fieldset>
      <div className="form-group">
        <label htmlFor="imageUrl">Image URL: </label>
        <input type="text" id="imageUrl" required autoFocus className="form-control" placeholder="Image URL" onChange={handleControlledInputChange} value={post.imageUrl}/>
      </div>
    </fieldset>
    <fieldset>
      <div className="form-group">
        <label htmlFor="caption">Caption: </label>
        <input type="text" id="caption" required autoFocus className="form-control" placeholder="Caption" onChange={handleControlledInputChange} value={post.caption}/>
      </div>
    </fieldset>
    <fieldset>
      <div className="form-group">
        <label htmlFor="caption">User: </label>
        <input type="text" id="userProfileId" required autoFocus className="form-control" placeholder="Enter 1 or 2 for now" onChange={handleControlledInputChange} value={post.userProfileId}/>
      </div>
    </fieldset>
    <button className="btn btn-primary"
      onClick={event => {
        event.preventDefault()
        handleSavePost()
      }}>Add Post</button>
  </form>
)}
