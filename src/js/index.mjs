import { setRegisterFormListener } from "./handlers/register.mjs";
import { setLoginFormListener } from "./handlers/login.mjs";
import * as posts from "./api/posts/index.mjs";

setRegisterFormListener()

setLoginFormListener()


// posts.createPost()
// posts.updatePost()
// posts.viewPost(679).then(console.log)
// posts.viewPosts().then(console.log)
// posts.removePost(694)




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