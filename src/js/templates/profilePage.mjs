import { viewProfile } from "../api/profile/viewProfile.mjs";

export async function profileTemplate() {

  const url = new URL(location.href);
  const name = url.searchParams.get("name");

  const profile = await viewProfile(name);

  const profileContainer = document.querySelector("#profileContainer");
  const profileName = document.createElement("h3");
  profileName.innerText = profile.name;

  profileContainer.append(profileName);


}

profileTemplate()