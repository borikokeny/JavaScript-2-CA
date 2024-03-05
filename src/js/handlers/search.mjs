// import { viewPosts } from "../api/posts/view.mjs";
// import { renderPostListTemplate } from "../templates/postList.mjs";

// export async function search() {
//   const posts = await viewPosts();

//   const searchForm = document.querySelector("#searchForm");
//   const searchInput = document.querySelector("#searchInput");

//   if (searchForm) {
//     searchForm.addEventListener("submit", (e) => {
//       e.preventDefault();
//  console.log(e);
//       const searchValue = searchInput.value.trim();

//       const filteredPosts = posts.filter((post) => {
//         if (!post.title || !post.body) {
//           return false;
//         }
//         return post.title.toLowerCase().includes(searchValue) || post.body.toLowerCase().includes(searchValue);
//       });

//       const searchContainer = document.querySelector("#searchContainer");
//       searchContainer.innerHTML = "";
//       renderPostListTemplate(filteredPosts, searchContainer);

//     });
//   }
 
// }

// search();