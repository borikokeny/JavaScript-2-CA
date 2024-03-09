import  { API_HOST_URL, API_POSTS } from "../constants.mjs";
import { authFetch } from "../fetch.mjs";
import { headers } from "../headers.mjs";

export async function createPost(postData) { 
  console.log(postData)
  const response = await authFetch(API_HOST_URL + API_POSTS, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify({
      title: postData.title,
      body: postData.body,
      tags: postData.tags.split(","),
      media: {
        "url": postData.media,
        "alt": postData.title
      }
    })
  })
  
  if (response.ok) {
    alert("Your post is ready to look at - go and enjoy the feed!")
  }

  return await response.json();
}