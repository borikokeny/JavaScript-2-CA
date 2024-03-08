// import { createdCounter } from "../api/utility/counter.mjs";

export function postListTemplate(postData) {

  const postFeedPage = document.createElement("div");
  postFeedPage.classList.add("container");

  const postFeedRows = document.createElement("div");
  postFeedRows.classList.add("row");

  postFeedPage.append(postFeedRows);

  // const userListContainer

  const post = document.createElement("a");
  post.classList.add("shadow-sm", "col-6", "row", "g-0", "border", "rounded", "overflow-hidden", "flex-md-row", "mb-4", "shadow-sm", "h-md-250", "position-relative");
  post.href = `../post/?id=${postData.id}`;
  post.style.textDecoration = "none";
  post.style.color = "black";

  postFeedRows.append(post);


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
  
  avatar.src = postData.author.avatar.url;
  avatar.classList.add("rounded-circle", "m-2");
  avatar.style.width = "3rem";
  avatar.style.height = "3rem";
  userName.innerText = postData.author.name;
  userName.classList.add("mt-2", "ms-3");




  

  avatarContainer.append(avatar);
  userNameContainer.append(userName);
  userContainer.append(avatarContainer, userNameContainer);

  if(postData.created) {
    const created = document.createElement("p");
    const today = new Date();
    const createdDate = new Date(postData.created);

    const timeCount = today - createdDate;
    const hoursToDate = Math.ceil((timeCount % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    // const hoursCount = Math.ceil(timeCount / (1000 * 60 * 60));
    const daysCount = Math.floor(timeCount / (1000 * 60 * 60 * 24));


    // const createdWatch = new Date(postData.created);
    // createdCounter(createdWatch, postedAgo);
  
  
    created.classList.add("ms-3");
    created.innerText = `Posted ${daysCount} day(s) and ${hoursToDate} hours ago`;
    
    userNameContainer.append(created);
  }
  
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
  if(!postData.media) {
    comment.style.display = "none";
    
  }

  const authorEmail = postData.author.email;
  // console.log(authorEmail);

  const user = localStorage.getItem("profile");
  const parsedUser = JSON.parse(user);
  const userEmail = parsedUser.email;

  // console.log(userEmail);

  // const isAuthor = postData.author.email === userEmail;

  // const editButton = document.createElement("button");
  // const deleteButton = document.createElement("button");
  // editButton.innerHTML = "Update Post";
  // deleteButton.innerHTML = "Delete Post";
  // editButton.classList.add("me-2", "btn", "btn-warning");
  // deleteButton.classList.add("btn", "btn-warning");
  
  

  // // console.log({ isAuthor });
  // if (isAuthor === true) {
  //   postCard.append(editButton, deleteButton);
  // }
 

  return post;
}

export function renderPostListTemplate(postDataList, parent) {
  parent.append(...postDataList.data.map(postListTemplate))
}