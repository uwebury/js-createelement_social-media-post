console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

const post = document.createElement("article");
post.classList.add("post");

const postContent = document.createElement("p");
postContent.classList.add("post__content");
postContent.textContent =
  " Lorem ipsum dolor, sit amet consectetur adipisicing elit.";

const postFooter = document.createElement("footer");
postFooter.classList.add("post__footer");

const postUserName = document.createElement("span");
postUserName.classList.add("post__username");
postUserName.textContent = "@username";

const postButton = document.createElement("button");
postButton.type = "button";
postButton.classList.add("post__button");
postButton.textContent = " ♥ Like";
//postButton.setAttribute("data-brokkoli", "like-button");
postButton.addEventListener("click", handleLikeButtonClick);

postFooter.append(postUserName, postButton);

post.append(postContent, postFooter);

document.body.append(post);
