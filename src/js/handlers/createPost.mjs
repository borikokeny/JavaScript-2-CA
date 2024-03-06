import { createPost } from "../api/posts/index.mjs";

export function setCreatePostFormListener() {
  const form = document.querySelector("#createPost");

  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault()
      const form = event.target;
      const formData = new FormData(form);
      const post = Object.fromEntries(formData.entries());

      // try {
      //   await login(profile);
      //   await viewPosts();
      // } catch {
      //   console.error("error");
      // }

      createPost(post)
      console.log(post);
    })
  }
  // const posts = ;

}

//15:09
// js/us/events/onAuth.js = js/handlers/login.mjs
// js/ui/listeners/auth.js setAuthListener = js/handlers/register.mjs

// talan ide johet a getPosts meghivasa, korabban az eredeti index.mjs legaljan volt es mukodott