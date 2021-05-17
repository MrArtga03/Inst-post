const post = document.querySelector(".post");
const likesEl = document.querySelector(".likes");
const heart = document.querySelector(".heart-icon");

// function for setting likes amount 
const setLikes = () => likesEl.innerText = `Количество лайков: ${localStorage.getItem("likes")}`

// localStorage enables you to save some data in the browser 
// it resets only when a user clears his history with other data like cookies
// initial check for localStorage info
if (localStorage.getItem("likes")) {
    setLikes()
} else {
    likesEl.innerText = "Пока нет ни одного лайка";
}

post.addEventListener("dblclick", () => { 
    // put the counter down in the callback
    let counter = JSON.parse(localStorage.getItem("likes"));

    // check for localStorage info. If there's so such value, create it 
    // and assign initial value to 1
    if (counter) {
        localStorage.setItem("likes", JSON.stringify(counter + 1))
    } else {
        localStorage.setItem("likes", JSON.stringify(1))
    }

    // removed the if statement
    // that line went into the function
    setLikes()

    heart.classList.add("animate-like");

    setTimeout (() => {
        heart.classList.remove("animate-like");
    }, 800);
});