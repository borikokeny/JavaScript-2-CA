import { viewPost } from "../api/posts/view.mjs";
import { removePost } from "../api/posts/delete.mjs";

export async function postTemplate() {
  const url = new URL(location.href);
  const id = url.searchParams.get("id");

  const post = await viewPost(id);

  const postContainer = document.querySelector(".postContainer");
  postContainer.classList.add("container");

  const profileContainer = document.createElement("div");
  const avatar = document.createElement("img");
  const userName = document.createElement("p");
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


  profileContainer.append(avatar, userName, created);
  // profileContainer.append(avatar, userName, created);
  postContainer.append(profileContainer);



  const postImage = document.querySelector("#postImageContainer");
  const postTitle = document.querySelector("#postTitle");
  const postBody = document.querySelector("#postBody");
  // document.title = post.data.title;
  postImage.alt = `Image from ${post.data.media.alt}`;
  postImage.src = post.data.media.url ?? `/images/img-placeholder.png`;
  postImage.style.width = "100%";
  postTitle.innerHTML = post.data.title;
  postBody.innerText = post.data.body;

  // postContainer.append(postImage, postTitle, postBody);
  // console.log(post.data.body);

  // post.append(postContainer)
  const user = localStorage.getItem("profile");
  const parsedUser = JSON.parse(user);
  const userEmail = parsedUser.email;

  // console.log(userEmail);
  // const authorEmail = post.author.email;
  // console.log(post.data.author.email);

  const isAuthor = post.data.author.email === userEmail;

  // console.log({ isAuthor });
  const editButton = document.createElement("a");
  const deleteButton = document.createElement("button");
  editButton.innerHTML = "Update Post";
  deleteButton.innerHTML = "Delete Post";
  deleteButton.classList.add("deletePost", "btn", "btn-warning", "m-1");
  deleteButton.id = "deleteButton";
  editButton.classList.add("btn", "btn-warning", "m-1");
  editButton.href = `../post/update/?id=${id}`;
  postContainer.append(postImage, postTitle, postBody);

  // console.log(postContainer);

  if (isAuthor === true) {
    postContainer.append(editButton, deleteButton);
  }

  // console.log(post.data.id);

  deleteButton.addEventListener("click", function(e) {
    e.preventDefault();
    alert("8");
    const confirmation = confirm("Are you sure you want to delete this post?");
    if (confirmation) {
       removePost(id);
    }
});

}









// export function renderPostPageTemplate(postData, parent) {
//   // parent.innerHTML = postTemplateA(postData)

//   parent.append(postTemplate(postData))
// }




// export function renderPostTemplates(postDataList, parent) {
//   parent.append(...postDataList.data.map(postTemplateB))
// }