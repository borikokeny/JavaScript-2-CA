import { viewPosts } from "../api/posts/view.mjs";
import { getSearchedPosts } from "../api/posts/search.mjs";
import { renderPostListTemplate } from "../templates/postList.mjs";

export async function search() {
  const postsToFilter = await viewPosts();

  const form = document.querySelector("#searchForm");
  const search = document.querySelector("#searchInput");

  console.log(postsToFilter);

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const searchValue = search.value.trim();
      console.log(searchValue);

      if (searchValue === "") {
        searchResults([]);
        return;
      }
     //postsToFilter.filter is not a function
      const postsFiltered = postsToFilter.filter((posts) => {
        const title = posts.title.toLowerCase();
        const body = posts.body.toLowerCase();
        console.log(postsFiltered);
        console.log(title);

        return title.includes(searchValue) || body.includes(searchValue);
      });

      searchResults(postsFiltered);
      console.log(postsFiltered);
    
    });
  }
}

function searchResults(postsFiltered) {
  const searchContainer = document.querySelector("#search-result"); 
  searchContainer.innerHTML = "";

  if (postsFiltered.length === 0) {
    return error;
  } else {
    renderPostListTemplate(postsFiltered, searchContainer);
  }
}