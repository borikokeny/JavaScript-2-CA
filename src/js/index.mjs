import { setRegisterFormListener } from "./handlers/register.mjs";
import { setLoginFormListener } from "./handlers/login.mjs";
import * as templates from "./templates/index.mjs";
import * as postMethods from "./api/posts/index.mjs";
import { renderPostTemplates } from "./templates/index.mjs";
import { setCreatePostFormListener } from "./handlers/createPost.mjs";
import * as listeners from "./handlers/index.mjs";


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


// posts.createPost()
// posts.updatePost()
// posts.viewPost(679).then(console.log)
// posts.viewPosts().then(console.log)
// posts.removePost(694)



// async function testTemplate() {
//   const posts = await postMethods.viewPosts();
//   // const post = posts.data.shift();
//   const post = posts.data.pop();
//   // const post = posts.data[79];
//   const container = document.querySelector("#post");
//   templates.renderPostTemplate(post, container);
// }

// testTemplate()

// async function testTemplateB() {
//   const posts = await postMethods.viewPosts();
//   // const post = posts.data.shift();
//   // const post = posts.data.pop();
//   // const post = posts.data[79];
//   const container = document.querySelector("#post");
//   templates.renderPostTemplates(posts, container);
// }

// testTemplateB()

async function testTemplateB() {
  const posts = await postMethods.viewPosts();
  // const post = posts.data.shift();
  // const post = posts.data.pop();
  // const post = posts.data[79];
  const container = document.querySelector("#posts");
  templates.renderPostTemplates(posts, container);
}

testTemplateB()








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