import { getSearchedPosts } from "../api/posts/search.mjs";
import { renderPostListTemplate } from "../templates/postList.mjs";


export async function search() {
  const form = document.querySelector("#searchForm");
  const search = document.querySelector("#searchInput");

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      
 
      const searchValue = search.value.trim();
      if (searchValue === "") {
                searchResults([]);
                return;
              }

         const postsToFilter = await getSearchedPosts(searchValue);
  console.log(postsToFilter);

              const postsFiltered = postsToFilter.data.filter((post) => {

                console.log(post);
                const title = post.title.toLowerCase();
                const body = post.body?.toLowerCase();
        
                return title.includes(searchValue) || body.includes(searchValue);
              });
        
              searchResults(postsFiltered);
              console.log(postsFiltered);
            
            });
          }
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