import { register } from "../api/auth/register.mjs";

export function setRegisterFormListener() {
  const form = document.querySelector("#registerForm");

  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault()
      const form = event.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries())
  
      // register(profile)
      try {
        await register(profile);
        window.location.href = "../../../profile/login/index.html";
        // await getPosts();
      } catch {
        console.error("error");
      }
    })
  }
}