import * as storage from "../api/storage/index.mjs";

export function setAvatar() {
  const user = storage.load("profile");
  document.querySelectorAll("#avatar").forEach((element) => (element.src = user.avatar.url));
}