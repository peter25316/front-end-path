const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const mainEl = document.getElementById("main-el")
const likeIcons = document.getElementsByClassName("icon-like")
const heartIconts = document.getElementsByClassName("icon-red-heart")
const likesCount = document.getElementsByClassName("likes-count")

console.log(likesCount)

const renderPostSection = (posts) => {
    let sections = ""
    for (let i = 0; i < posts.length; i++) {
        sections += `
        <section class="post-section">
            <div class="container">
                <div class="user-info">
                    <img src="${posts[i].avatar}" class="user-avatar" alt="">
                    <div>
                        <h2 class="username">${posts[i].name}</h2>
                        <p class="location">${posts[i].location}</p>
                    </div>
                </div>

                <div>
                    <img src="${posts[i].post}" class="post-img" alt="">
                </div>

                <div class="post-content">
                    <div class="icons">
                    <div><img class="icon-red-heart" src="images/icon-redheart.png"></div>
                        <img class="icon-img icon-like" src="images/icon-heart.png">
                        <img class="icon-img" src="images/icon-comment.png">
                        <img class="icon-img" src="images/icon-dm.png">
                    </div>
                    <p id="likes-el" class="bold-text"><span class="likes-count">${posts[i].likes}</span> likes</p>
                    <p id="comments-el"><span class="bold-text">${posts[i].username}</span> ${posts[i].comment}</p>
                </div>
            </div>
        </section>`
    }
    mainEl.innerHTML = sections
}

renderPostSection(posts)

for (let i = 0; i < likeIcons.length; i++) {
    likeIcons[i].addEventListener("click", function () {
        likeIcons[i].style.display = "none"
        heartIconts[i].style.display = "inline"
        let count = posts[i].likes += 1
        likesCount[i].textContent = count
        heartIconts[i].addEventListener("click", function () {
            let count = posts[i].likes += 1
            likesCount[i].textContent = count
        })
    })
}
