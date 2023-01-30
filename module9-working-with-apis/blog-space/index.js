let postsArr = []
const titleInput = document.getElementById("post-title")
const bodyInput = document.getElementById("post-body")
const newPost = document.getElementById('new-post')


const renderPosts = () => {
    let html = ``
    postsArr.forEach(post => {
        html += `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
                <hr/>
            `
    })
    document.getElementById('blog-list').innerHTML = html
}

const clearPost = () => {
    titleInput.value = ''
    bodyInput.value = ''
}

fetch('https://apis.scrimba.com/jsonplaceholder/posts')
    .then(res => res.json())
    .then(data => {
        postsArr = data.slice(0, 5)
        console.log(postsArr)
        renderPosts()
    })

document.addEventListener('submit', (e) => {
    e.preventDefault()
    if (e.target.id === 'new-post') {
        // collect data from the 'form' element
        const newPostData = new FormData(newPost)
        const data = {
            title: newPostData.get('title'),
            body: newPostData.get('body')
        }

        // send data back to server using POST method
        fetch('https://apis.scrimba.com/jsonplaceholder/posts', {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(newPost => {
                console.group(newPost)
                postsArr.unshift(newPost)
                renderPosts()
                clearPost()
            })
    }
})