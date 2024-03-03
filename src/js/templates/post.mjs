// export function postTemplateA(postData) {
//   return `<div class="post">${postData.title}</div>`
// }

export function postTemplateB(postData) {
  const post = document.createElement("div");
  post.classList.add("post");
  post.innerText = postData.title;

  if(postData.media) {
    const img = document.createElement("img");
    img.src = postData.media.url;
    img.alt =  `Image from ${postData.media.title}`;
    post.append(img)
  }
  // const button = document.createElement("button");
  // post.append(button);

  // button.addEventListener("click", () => console.log(postData))

  return post;
}

export function renderPostTemplate(postData, parent) {
  // parent.innerHTML = postTemplateA(postData)

  parent.append(postTemplateB(postData))
}

export function renderPostTemplates(postDataList, parent) {
  parent.append(...postDataList.data.map(postTemplateB))
}