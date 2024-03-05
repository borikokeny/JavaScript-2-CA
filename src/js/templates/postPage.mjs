import { viewPost } from "../api/posts/view.mjs";

export async function postTemplate() {
  const url = new URL(location.href);
  const id = url.searchParams.get("id");

  const post = await viewPost(id);

  const postContainer = document.createElement("div");
  postContainer.classList.add("container");

  const postImage = document.querySelector("#postImageContainer");
  const postTitle = document.querySelector("#postTitle");
  const postBody = document.querySelector("#postBody");
  // document.title = post.data.title;
  postImage.alt = `Image from ${post.data.media.alt}`;
  postImage.src = post.data.media.url ?? `/images/img-placeholder.png`;
  postImage.style.width = "100%";
  postTitle.innerHTML = post.data.title;
  postBody.innerText = post.data.body;

  postContainer.append();

  // const postCard = document.createElement("div");
  // postCard.classList.add("post");
  // postCard.innerText = post.data.title;
  // const img = document.createElement("img");
  //   img.src = post.media.url;
  //   img.alt =  `Image from ${post.media.alt}`;
  //   postCard.append(img)

  // if(post.media) {
  //   const img = document.createElement("img");
  //   img.src = post.media.url;
  //   img.alt =  `Image from ${post.media.alt}`;
  //   postCard.append(img)
  // }
  // const button = document.createElement("button");
  // post.append(button);

  // button.addEventListener("click", () => console.log(postData))

  // return post;
}





// export function renderPostPageTemplate(postData, parent) {
//   // parent.innerHTML = postTemplateA(postData)

//   parent.append(postTemplate(postData))
// }




// export function renderPostTemplates(postDataList, parent) {
//   parent.append(...postDataList.data.map(postTemplateB))
// }