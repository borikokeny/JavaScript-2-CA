// import { createdCounter } from "../api/utility/counter.mjs";

export function postListTemplate(postData) {

  const postFeedPage = document.createElement("div");
  postFeedPage.classList.add("container");

  const postFeedRows = document.createElement("div");
  postFeedRows.classList.add("row");

  postFeedPage.append(postFeedRows);

  // const userListContainer

  const post = document.createElement("a");
  post.classList.add("shadow-sm", "col", "g-0", "border", "overflow-hidden", "shadow-sm");
  post.href = `../post/?id=${postData.id}`;
  post.style.height = "10rem";
  post.style.textDecoration = "none";
  post.style.color = "black";

  postFeedRows.append(post);


  const postCard = document.createElement("div");
  
  
  post.append(postCard);
 

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
  const userName = document.createElement("h6");
  
  avatar.src = postData.author.avatar.url;
  avatar.classList.add("rounded-circle", "m-2");
  avatar.style.width = "3rem";
  avatar.style.height = "3rem";
  userName.innerText = postData.author.name;
  userName.classList.add("mt-2", "ms-3");

  avatarContainer.append();
  userNameContainer.append();
  userContainer.append(avatarContainer, userNameContainer);

  if(postData.created) {
    const created = document.createElement("p");
    const today = new Date();
    const createdDate = new Date(postData.created);


   
    // console.log(createdDate.toISOString());



    const timeCount = today - createdDate;
    const hoursToDate = Math.ceil((timeCount % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const daysCount = Math.floor(timeCount / (1000 * 60 * 60 * 24));
  
    created.classList.add("ms-3");
    created.innerText = `Posted ${daysCount} day(s) and ${hoursToDate} hours ago`;
    
    userNameContainer.append();
  }
  
  if(postData.media) {
    const img = document.createElement("img");
    img.classList.add("img-fluid"); //ezek eddig semmit se mukodnek
    // img.style.width = "100%"; //csak ez
    // img.style.height = "15rem";
    // img.style.height = "10rem";
    img.style.objectFit = "cover";
    img.src = postData.media.url ?? `/images/img-placeholder.png`;
    img.alt =  `Image from ${postData.media.alt}`;
    
    postCard.append(userContainer, img)
  } 

  const comment = document.createElement("input");
  comment.classList.add("col-6", "m-2", "rounded");
  comment.placeholder = "write a comment...";
  comment.style.height = "3rem";
  postCard.append();

  if(!postData.media) {
    comment.style.display = "none";
    post.style.display = "none";
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