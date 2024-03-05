import { updatePost, viewPost } from "../api/posts/index.mjs";

export async function setUpdatePostListener() {
  const form = document.querySelector("#updatePost");

  const url = new URL(location.href);
  const id = url.searchParams.get("id");

  if (form) {
    const button = form.querySelector("button");
    button.disabled = true;

    const post = await viewPost(id);

    form.title.value = post.data.title;
    form.body.value = post.data.body;

    button.disabled = false;


    form.addEventListener("submit", async (event) => {
      event.preventDefault()
      const form = event.target;
      const formData = new FormData(form);
      const post = Object.fromEntries(formData.entries());
      post.id = id;

      // try {
      //   await login(profile);
      //   await viewPosts();
      // } catch {
      //   console.error("error");
      // }

      updatePost(post)
    })
  }
  // const posts = ;
  // console.log(posts);
}

//15:09
// js/us/events/onAuth.js = js/handlers/login.mjs
// js/ui/listeners/auth.js setAuthListener = js/handlers/register.mjs

// talan ide johet a getPosts meghivasa, korabban az eredeti index.mjs legaljan volt es mukodott