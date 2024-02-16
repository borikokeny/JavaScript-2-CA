import { login } from "../api/auth/login.mjs";
import { getPosts } from "../api/posts/get.mjs";

export function setLoginFormListener() {
  const form = document.querySelector("#loginForm");

  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault()
      const form = event.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries());

      try {
        await login(profile);
        await getPosts();
      } catch {
        console.error("error");
      }
  
      

    })
  }
  // const posts = ;
  // console.log(posts);
}

//15:09
// js/us/events/onAuth.js = js/handlers/login.mjs
// js/ui/listeners/auth.js setAuthListener = js/handlers/register.mjs

// talan ide johet a getPosts meghivasa, korabban az eredeti index.mjs legaljan volt es mukodott