import { viewPost } from "../api/posts/view.mjs";
import { removePost } from "../api/posts/delete.mjs";

export async function postTemplate() {
  const url = new URL(location.href);
  const id = url.searchParams.get("id");

  const post = await viewPost(id);

  const postContainer = document.querySelector(".postContainer");
  postContainer.classList.add("container");
  postContainer.style.width = "60%";

  const userContainer = document.createElement("div");
  const profileContainer = document.createElement("div");
  const userNameContainer = document.createElement("div");
  const postImageContainer = document.createElement("div");
  postImageContainer.classList.add("ms-n2");
  userContainer.classList.add("row");
  profileContainer.classList.add("col-2", "order-md-1");
  userNameContainer.classList.add("col-8", "order-md-2", "ms-3");
  const avatar = document.createElement("img");
  const userName = document.createElement("H3");
  const created = document.createElement("p");
  
 
  avatar.src = post.data.author.avatar.url;
  avatar.classList.add("rounded-circle", "m-2");
  avatar.style.width = "3rem";
  avatar.style.height = "3rem";
  userName.innerText = post.data.author.name;
  // userName.classList.add("mt-2", "ms-3");
  created.innerText = post.data.created;
  // created.classList.add("ms-3");
  created.innerText = `Posted ${created.innerText} hours ago`;

  profileContainer.append(avatar);
  userNameContainer.append(userName, created);
  userContainer.append(profileContainer, userNameContainer);


  const postImage = document.createElement("img");
  const postTitle = document.createElement("h2");
  const postBody = document.createElement("p");
  // document.title = post.data.title;
  postImage.alt = `Image from ${post.data.media.alt}`;
  postImage.src = post.data.media.url ?? `/images/img-placeholder.png`;
  postImage.classList.add("ms-0");
  postImage.style.width = "100%";
  postImage.style.objectFit = "cover";
  postTitle.innerHTML = post.data.title;
  postTitle.classList.add("mt-3");
  postBody.innerText = post.data.body;

  postImageContainer.append(postImage);

  const user = localStorage.getItem("profile");
  const parsedUser = JSON.parse(user);
  const userEmail = parsedUser.email;

  const isAuthor = post.data.author.email === userEmail;

  const editButton = document.createElement("a");
  const deleteButton = document.createElement("button");
  editButton.innerHTML = "Update Post";
  deleteButton.innerHTML = "Delete Post";
  deleteButton.classList.add("deletePost", "btn", "btn-outline-dark", "m-1");
  deleteButton.id = "deleteButton";
  editButton.classList.add("btn", "btn-outline-dark", "m-1", "ms-0");
  editButton.href = `../post/update/?id=${id}`;
  postContainer.append(userContainer,postImageContainer, postTitle, postBody);

  // console.log(postContainer);

  if (isAuthor === true) {
    postContainer.append(editButton, deleteButton);
  }

  // console.log(post.data.id);

  deleteButton.addEventListener("click", function(e) {
    e.preventDefault();
    const confirmation = confirm("Are you sure you want to delete this post?");
    if (confirmation) {
       removePost(id);
    }
});

}
