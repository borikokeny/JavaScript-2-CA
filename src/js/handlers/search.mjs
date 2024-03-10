import { getSearchedPosts } from "../api/posts/search.mjs";
import { viewPosts } from "../api/posts/view.mjs";
import { renderPostListTemplate } from "../templates/postList.mjs";

export async function search() {
  const form = document.querySelector("#searchForm");
  const filter = document.querySelector("#formSelect");

  if (form) {
    form.addEventListener("submit", handlerSearch);
  }
  filter.addEventListener("change", handlerSearch);
}

function searchResults(postsFiltered) {
  const searchContainer = document.querySelector("#searchResults");

  searchContainer.innerHTML = "";

  if (postsFiltered.length === 0) {
    return error;
  } else {
    renderPostListTemplate(postsFiltered, searchContainer);
  }
}

async function handlerSearch(e) {
  const filter = document.querySelector("#formSelect");
  const search = document.querySelector("#searchInput");

  e.preventDefault();
  console.log(filter.value);

  const searchValue = search.value.trim();
  let postsToFilter;
  if (searchValue === "") {
    postsToFilter = await viewPosts();
  } else {
    postsToFilter = await getSearchedPosts(searchValue);
  }

  console.log(postsToFilter);

  const postsFiltered = postsToFilter.data.filter((post) => {
    const today = new Date();
    const createdDate = new Date(post.created);

    console.log(post);
    const daysAgo =
      (today.getTime() - createdDate.getTime()) / (1000 * 60 * 60 * 24);

    console.log(daysAgo, filter.value);
    let isGoodDate = true;

    if (filter.value === "today" && daysAgo > 1) {
      isGoodDate = false;
    }

    const title = post.title.toLowerCase();
    const body = post.body?.toLowerCase();

    return (
      (title.includes(searchValue) || body.includes(searchValue)) && isGoodDate
    );
  });

  searchResults(postsFiltered);
  console.log(postsFiltered);
}
