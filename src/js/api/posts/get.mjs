import { API_HOST_URL, API_POSTS } from "../constants.mjs";
import { authFetch } from "../fetch.mjs";

export async function getPosts() {
  const response = await authFetch(API_HOST_URL + API_POSTS);
  return await response.json();
}