import { login } from "../api/auth/login.mjs";
import { viewPosts } from "../api/posts/view.mjs";

export function setLoginFormListener() {
  const form = document.querySelector("#loginForm");

  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
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
    });
  }
}
