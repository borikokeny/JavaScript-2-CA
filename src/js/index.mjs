
import * as templates from "./templates/index.mjs";
import * as postMethods from "./api/posts/index.mjs";
import * as listeners from "./handlers/index.mjs";
import * as profile from "./api/profile/index.mjs";
import { logout } from "./api/auth/logout.mjs";

logout()
// ezt majd rendbe kell tenni!!!
// const path = location.pathname;

// if (path === '/profile/login/') {
//   setLoginFormListener()
// } else if (path === '/profile/register/') {
//   setRegisterFormListener()
// }

listeners.setLoginFormListener()
listeners.setRegisterFormListener()
listeners.setCreatePostFormListener()
listeners.setUpdatePostListener()
listeners.search()
listeners.setAvatar()
templates.postTemplate()

// templates.profileTemplate()
// profile.viewProfile()


// posts.createPost()
// posts.updatePost()
// posts.viewPost(679).then(console.log)
// posts.viewPosts().then(console.log)
// postMethods.removePost(797)


async function postListTemplateX() {
  const posts = await postMethods.viewPosts();
  // const post = posts.data.shift();
  // const post = posts.data.pop();
  // const post = posts.data[79];
  const container = document.querySelector("#posts");
  // container.classList.add("container");
  templates.renderPostListTemplate(posts.data, container);
}

postListTemplateX()

// async function searchListTemplateX() {
//   const posts = await postMethods.getSearchedPosts();
//   // const post = posts.data.shift();
//   // const post = posts.data.pop();
//   // const post = posts.data[79];
//   const container = document.querySelector("#posts");
//   // container.classList.add("container");
//   templates.renderSearchListTemplate(posts, container);
// }

// searchListTemplateX()








//ha megvan a KEY, ki lehet torolni
// export async function getAPIKey(){
//   const response = await fetch(API_HOST_URL + API_AUTH + API_KEY_URL, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${load("token")}`
//     },
//     body: JSON.stringify({
//       name: "Test key"
//     })
//   });

//   if (response.ok) {
//     return await response.json();
//   }
  
//   console.error(await response.json());
//   throw new Error("Could not get the API Key");
// }









// getAPIKey().then(console.log)



// export async function onAuth(event) {
//   event.preventDefault();
//   const name = event.target.name.value;
//   const email = event.target.email.value;
//   const password = event.target.password.value;

//   if (event.submitter.dataset.auth === "login") {
//     await login(email, password);
//   } else {

//     await register(name, email, password);
//     await login(email, password);
//   }

//   const posts = await getPosts();
//   console.log(posts);
// }

// export function setAuthListener() {
//   document.forms.auth.addEventListener("submit", onAuth);
// }

// setAuthListener()