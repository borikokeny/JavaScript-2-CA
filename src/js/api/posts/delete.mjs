import  { API_HOST_URL, API_POSTS } from "../constants.mjs";
import { authFetch } from "../fetch.mjs";
import { headers } from "../headers.mjs";

export async function removePost(id) { 
  if (!id) {
    throw new Error("Delete requires a postID!")
  }
  const updatePostURL = `${API_HOST_URL}${API_POSTS}/${id}`;

  const response = await authFetch(updatePostURL, {
    method: "DELETE",
    headers: headers()
    })
  
    if (response.ok) {
      alert("Your post is deleted - go and enjoy the feed!")
    }

  return await response.json();
}
