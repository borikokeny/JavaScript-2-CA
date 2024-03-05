export function postListTemplate(postData) {

  const post = document.createElement("a");
  post.classList.add("shadow-sm");
  post.href = `../post/?id=${postData.id}`;
  post.style.textDecoration = "none";
  post.style.color = "black";


  const postCard = document.createElement("div");
  // post.classList.add("posts");
  
  post.append(postCard)
 
  // post.innerText = postData.title;

  if(postData.media) {
    const img = document.createElement("img");
    img.classList.add("img-fluid", "w-100", "bd-placeholder-img", "card-img-top", "mb-4"); //ezek eddig semmit se mukodnek
    img.style.width = "100%"; //csak ez
    // img.style.height = "15rem";
    img.src = postData.media.url ?? `/images/img-placeholder.png`;
    img.alt =  `Image from ${postData.media.alt}`;
    
    postCard.append(img)
  }

  const title = document.createElement("h2");
  const body = document.createElement("p");
  title.innerText = postData.title;
  body.innerText = postData.body;
  postCard.append(title, body)
  
  

  return post;
}

export function renderPostListTemplate(postDataList, parent) {
  parent.append(...postDataList.data.map(postListTemplate))
}