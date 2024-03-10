// import { createdCounter } from "../api/utility/counter.mjs";

export function postListTemplate(postData) {

  const postFeedPage = document.createElement("div");
  postFeedPage.classList.add("container", "mb-2");

  const postFeedRows = document.createElement("div");
  postFeedRows.classList.add("row");

  postFeedPage.append(postFeedRows);

  // const userListContainer
  const emptyPost = document.createElement("div");
  emptyPost.classList.add("col2-3");
  const post = document.createElement("a");
  post.classList.add("shadow-sm", "card",  "border", "rounded",  "mb-4", "shadow-sm", "h-md-250");
  post.href = `../post/?id=${postData.id}`;
  post.style.textDecoration = "none";
  post.style.color = "black";

  // postFeedRows.append(emptyPost, post);


  const postCard = document.createElement("div");
  // postCard.classList.add("col-6")
  // post.classList.add("posts");
  
  post.append(postCard);
 
  // post.innerText = postData.title;
  const userContainer = document.createElement("div");
  userContainer.classList.add("row", "border","ms-0", "me-0");
  userContainer.style
  const title = document.createElement("h2");
  const body = document.createElement("p");
  title.innerText = postData.title;
  title.classList.add("ms-2", "mt-2");
  body.innerText = postData.body;
  body.classList.add("mb-4", "ms-2");
  body.style.overflow = "elipsis";
  
  
  const avatarContainer = document.createElement("div");
  const userNameContainer = document.createElement("div");
  avatarContainer.classList.add("col-2", "order-md-1");
  userNameContainer.classList.add("col-8", "order-md-2", "ms-3");
 

  const avatar = document.createElement("img");
  const userName = document.createElement("h6");
  
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


   
    // console.log(createdDate.toISOString());



    const timeCount = today - createdDate;
    const hoursToDate = Math.ceil((timeCount % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const daysCount = Math.floor(timeCount / (1000 * 60 * 60 * 24));
  
    created.classList.add("ms-3");
    created.innerText = `Posted ${daysCount} day(s) and ${hoursToDate} hours ago`;
    
    userNameContainer.append(created);
  }
  
  if(postData.media) {
    const img = document.createElement("img");
    img.classList.add("img-fluid", "w-100", "bd-placeholder-img", "card-img-top", "mb-4"); //ezek eddig semmit se mukodnek
   
    
    img.src = postData.media.url ?? `/images/img-placeholder.png`;

    img.alt =  `Image from ${postData.media.alt}`;

    img.style.objectFit = "cover";
    const imgContainer = document.createElement("div");
    imgContainer.style.height = "225";
    imgContainer.append(img);
    postCard.append(userContainer, title, body, imgContainer)
  } 

  const comment = document.createElement("input");
  comment.classList.add("col-11", "m-2", "rounded");
  comment.placeholder = "write a comment...";
  comment.style.height = "3rem";
  postCard.append();

  if(!postData.media) {
    comment.style.display = "none";
    post.style.display = "none";
  }

  const authorEmail = postData.author.email;

  const user = localStorage.getItem("profile");
  const parsedUser = JSON.parse(user);
  const userEmail = parsedUser.email;
 
  return post;
}

export function renderPostListTemplate(postDataList, parent) {
  parent.append(...postDataList.map(postListTemplate))
}
