export function postListTemplate(postData) {

  const post = document.createElement("a");
  post.classList.add("shadow-sm", "row", "g-0", "border", "rounded", "overflow-hidden", "flex-md-row", "mb-4", "shadow-sm", "h-md-250", "position-relative");
  post.href = `../post/?id=${postData.id}`;
  post.style.textDecoration = "none";
  post.style.color = "black";


  const postCard = document.createElement("div");
  // post.classList.add("posts");
  
  post.append(postCard);
 
  // post.innerText = postData.title;
  const userContainer = document.createElement("div");
  userContainer.classList.add("row", "featurette");
  const title = document.createElement("h2");
  const body = document.createElement("p");
  title.innerText = postData.title;
  title.classList.add("ms-2");
  body.innerText = postData.body;
  body.classList.add("mb-4", "ms-2");
  
  const avatarContainer = document.createElement("div");
  const userNameContainer = document.createElement("div");
  avatarContainer.classList.add("col-md-1", "order-md-1");
  userNameContainer.classList.add("col-md-11", "order-md-2");

  const avatar = document.createElement("img");
  const userName = document.createElement("p");
  const created = document.createElement("p");
  avatar.src = postData.author.avatar.url;
  avatar.classList.add("rounded-circle", "m-2");
  avatar.style.width = "3rem";
  avatar.style.height = "3rem";
  userName.innerText = postData.author.name;
  userName.classList.add("mt-2", "ms-3");
  created.innerText = postData.created;
  created.classList.add("ms-3");
  created.innerText = `Posted ${created.innerText} hours ago`;

  avatarContainer.append(avatar);
  userNameContainer.append(userName, created);
  userContainer.append(avatarContainer, userNameContainer);
  
  if(postData.media) {
    const img = document.createElement("img");
    img.classList.add("img-fluid", "w-100", "bd-placeholder-img", "card-img-top", "mb-4"); //ezek eddig semmit se mukodnek
    img.style.width = "100%"; //csak ez
    // img.style.height = "15rem";
    img.src = postData.media.url ?? `/images/img-placeholder.png`;
    img.alt =  `Image from ${postData.media.alt}`;
    
    postCard.append(userContainer, title, body, img)
  }



  const comment = document.createElement("input");
  comment.classList.add("col-6", "m-2", "rounded");
  comment.placeholder = "write a comment...";
  comment.style.height = "3rem";
  postCard.append(comment);

  return post;
}

export function renderPostListTemplate(postDataList, parent) {
  parent.append(...postDataList.data.map(postListTemplate))
}