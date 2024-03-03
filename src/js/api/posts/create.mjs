import  { API_HOST_URL, API_POSTS } from "../constants.mjs";
import { authFetch } from "../fetch.mjs";
import { headers } from "../headers.mjs";

export async function createPost(postData) { 
  const response = await authFetch(API_HOST_URL + API_POSTS, {
    method: "POST",
    headers: headers(),
    // body: JSON.stringify(postData)
    body: JSON.stringify({
      title: postData.title,
      body: postData.body,
      tags: postData.tags.split(","),
      media: postData.media.url
    })
  })

  // const post = await response.json();
  // console.log(post)

  return await response.json();
}