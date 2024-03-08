import { API_HOST_URL, API_SEARCH } from "../constants.mjs";
import { authFetch } from "../fetch.mjs";
// import { headers } from "../headers.mjs";

export async function getSearchedPosts(query) {
 
    const getSearchedPostsURL = `${API_HOST_URL}${API_SEARCH}/?_author=true&`;

    const response = await authFetch(getSearchedPostsURL);

    return await response.json();
}