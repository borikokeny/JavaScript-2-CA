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
    // body: JSON.stringify({
    //   title: postData.title,
    //   body: postData.body,
    //   tags: postData.tags,
    //   media: postData.media

      // tags: postData.tags.split(","),
      // media: postData.media.split(",")
    })
  

  // const post = await response.json();
  // console.log(post)

  return await response.json();
}
