import { login } from "../api/auth/login.mjs";
import { viewPosts } from "../api/posts/view.mjs";

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
        window.location.href = "../../../posts/index.html";
        await viewPosts();
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