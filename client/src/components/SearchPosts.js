import React, { useContext, useState } from "react"
import { PostContext } from "../providers/PostProvider";
import { useHistory } from 'react-router-dom';

export const SearchPosts = () => {
  const { searchPosts } = useContext(PostContext)
}

const [post, setPost] 
