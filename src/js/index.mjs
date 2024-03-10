
import * as templates from "./templates/index.mjs";
import * as postMethods from "./api/posts/index.mjs";
import * as listeners from "./handlers/index.mjs";
import { logout } from "./api/auth/logout.mjs";

logout()
listeners.setLoginFormListener()
listeners.setRegisterFormListener()
listeners.setCreatePostFormListener()
listeners.setUpdatePostListener()
listeners.search()
listeners.setAvatar()
templates.postTemplate()

async function postListTemplateX() {
  const posts = await postMethods.viewPosts();
  const container = document.querySelector("#posts");
  templates.renderPostListTemplate(posts.data, container);
}

postListTemplateX()
