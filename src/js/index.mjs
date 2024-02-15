export const API_KEY = "f7fc77bc-aaa9-4321-a4c9-a00edca3e886";

export const API_HOST_URL = "https://v2.api.noroff.dev";
export const API_AUTH = "/auth";
export const API_REGISTER = "/register";
export const API_LOGIN = "/login";
export const API_KEY_URL = "/create-api-key";


export function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function load(key) {
 return JSON.parse(localStorage.getItem(key));
}

export async function getPosts() {
  const response = await fetch(API_HOST_URL + "/social/posts", {
    headers: {
      Authorization: `Bearer ${load("token")}`,
      "X-Noroff-API-Key": API_KEY
    }
  });
  return await response.json();
}

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

export async function register(profile) {
  const response = await fetch(API_HOST_URL + API_AUTH + API_REGISTER, {
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST",
    body: JSON.stringify(profile)
  });

  if (response.ok) {
    return await response.json();
  }

  throw new Error("Account could not be registered");
}

export async function login(profile) {
  const response = await fetch(API_HOST_URL + API_AUTH + API_LOGIN, {
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST",
    body: JSON.stringify(profile)
  });

  if (response.ok) {
    const { accessToken, ...profile} = (await response.json()).data;
    save("token", accessToken);
    save("profile", profile);
    return profile;
  }

  throw new Error("Could not login");
}

export function setRegisterFormListener() {
  const form = document.querySelector("#registerForm");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault()
      const form = event.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries())
  
      register(profile)
    })
  }
}

setRegisterFormListener()

export async function setLoginFormListener() {
  const form = document.querySelector("#loginForm");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault()
      const form = event.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries())
  
      login(profile)

    })

  }
  const posts = await getPosts();
  console.log(posts);
}

setLoginFormListener()

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