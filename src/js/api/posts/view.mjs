import  { API_HOST_URL, API_POSTS, API_POSTS_WITH_AUTHOR } from "../constants.mjs";
import { authFetch } from "../fetch.mjs";
// import { headers } from "../headers.mjs";

export async function viewPosts() { 
  const viewPostsURL = `${API_HOST_URL}${API_POSTS_WITH_AUTHOR}`;

  const response = await authFetch(viewPostsURL);

  return await response.json();
}

export async function viewPost(id) {
  if(!id) {
    throw new Error("GET request requires an ID");
  } 
  
  const viewPostURL = `${API_HOST_URL}${API_POSTS}/${id}`;

  const response = await authFetch(viewPostURL);

  return await response.json();
}