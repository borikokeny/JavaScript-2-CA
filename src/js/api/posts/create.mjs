import { API_HOST_URL, API_POSTS } from "../constants.mjs";
import { authFetch } from "../fetch.mjs";
import { headers } from "../headers.mjs";

/**
 * This function sends a POST request to the API with the postData
 * @param {Object} postData Object is collected from the create form
 * @returns if the response is OK, it returns a post to the feed with the collected data from the form
 * ```js
 * const postData={title:"Test Post", body:"Test Body", tag:"test", media.url:"https://picsum.photos/id/347/5000/3334"}
 * createPost(postData)
 * returns a postData
 * ```
 */

export async function createPost(postData) {
  console.log(postData);
  const response = await authFetch(API_HOST_URL + API_POSTS, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify({
      title: postData.title,
      body: postData.body,
      tags: postData.tags.split(","),
      media: {
        url: postData.media,
        alt: postData.title,
      },
    }),
  });

  if (response.ok) {
    alert("Your post is ready to look at - go and enjoy the feed!");
  }

  return await response.json();
}
