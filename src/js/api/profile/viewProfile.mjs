import { API_HOST_URL, API_PROFILE} from "../constants.mjs";
import { authFetch } from "../fetch.mjs";

export async function viewProfiles() {
  const viewProfilesURL = `${API_HOST_URL}${API_PROFILE}`;

  const response = await authFetch(viewProfilesURL);

  if(response.ok) {
    return await response.json();
  } else {
    throw new Error(response.statusText);
  }
}

export async function viewProfile(name) {
  if(!name) {
    throw new Error("GET request requires a name");
  }

  const viewProfileURL = `${API_HOST_URL}${API_PROFILE}/${name}`;

  const response = await authFetch(viewProfileURL);

  if(response.ok) {
    return await response.json();
  } else {
    throw new Error(response.statusText);
  }
}