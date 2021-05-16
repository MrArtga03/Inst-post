const post = document.querySelector(".post");
const likesEl = document.querySelector(".likes");
const heart = document.querySelector(".heart-icon");

likesEl.innerText = "Пока нет ни одного лайка";

let counter = 0;
post.addEventListener("dblclick", () => {
    counter++;

    if (counter === 1) {
        likesEl.innerText = counter + " лайк";
    } else {
        likesEl.innerText = counter + " лайка";
    }

    heart.classList.add("animate-like");
    setTimeout (() => {
        heart.classList.remove("animate-like");
    }, 800);
});