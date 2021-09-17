const button_CreatePost = document.getElementById('create-post')
const button_SubmitComment = document.getElementById('submit-button')
const button_CancelComment = document.getElementById('cancel-button')

button_CreatePost.addEventListener('click', function () {
    // Open Form
    const form = document.getElementById('form')
    form.setAttribute('style', 'display: show;')

})

button_SubmitComment.addEventListener('click', function () {

    const title = document.getElementById('title').value
    const content = document.getElementById('blog-post').value
    console.log('phase 1')
    console.log(title)
    console.log(content)

    fetch('/api/blog', {
        method: "POST",
        body: JSON.stringify({title: title, content: content}),
        headers: { 'Content-Type': 'application/json' }

    })

        .then(function (response) {
            console.log('phase 2')
            if (response) {
                // Close Form
                const form = document.getElementById('form')
                form.setAttribute('style', 'display: none;')
            } else {
            alert('Post not submitted')
        }
        })
})

button_CancelComment.addEventListener('click', function () {

    // Close Form
    const form = document.getElementById('form')
    form.setAttribute('style', 'display: none;')
})