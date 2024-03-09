import  { API_HOST_URL, API_POSTS } from "../constants.mjs";
import { authFetch } from "../fetch.mjs";
import { headers } from "../headers.mjs";

export async function updatePost(postData) { 
  if (!postData.id) {
    throw new Error("Update requires a postID!")
  }
  const updatePostURL = `${API_HOST_URL}${API_POSTS}/${postData.id}`;

  const response = await authFetch(updatePostURL, {
    method: "PUT",
    headers: headers(),
    body: JSON.stringify({
      title: postData.title,
      body: postData.body,
      tags: postData.tags.split(","),
      media:  {
        "url": postData.media,
        "alt": postData.title
      }
    })
  })
 
  if (response.ok) {
    alert("Your post is updated - go and check the feed!")
  }

  return await response.json();
}