const button_AddComment = document.getElementById('add-comment')
const button_SubmitComment = document.getElementById('submit-button')
const button_CancelComment = document.getElementById('cancel-button')

button_AddComment.addEventListener('click', function () {
    // Open Form
    const form = document.getElementById('form')
    form.setAttribute('style', 'display: show;')

})

button_SubmitComment.addEventListener('click', function () {

    const comment = document.getElementById('about').value
    console.log('phase 1')
    console.log(comment)

    fetch('/api/blog/comment', {
        method: "POST",
        body: JSON.stringify({comment: comment}),
        headers: { 'Content-Type': 'application/json' }

    })

        .then(function (response) {
            console.log('phase 2')
            if (response) {
                // Close Form
                const form = document.getElementById('form')
                form.setAttribute('style', 'display: none;')
            } else {
            alert('Comment not submitted')
        }
        })
})

button_CancelComment.addEventListener('click', function () {

    // Close Form
    const form = document.getElementById('form')
    form.setAttribute('style', 'display: none;')
})