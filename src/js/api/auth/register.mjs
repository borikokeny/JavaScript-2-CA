import { API_AUTH, API_HOST_URL, API_REGISTER } from "../constants.mjs";
import { authFetch } from "../fetch.mjs";

export async function register(profile) {
  const response = await authFetch(API_HOST_URL + API_AUTH + API_REGISTER, {
    method: "POST",
    body: JSON.stringify(profile)
  });

  if (response.ok) {
    alert("You are now registered")
    return await response.json();
  }

  throw new Error("Account could not be registered");
}