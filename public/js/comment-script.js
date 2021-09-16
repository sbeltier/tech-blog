const button_AddComment = document.getElementById('add-comment')
const button_SubmitComment = document.getElementById('submit-button')
const button_CancelComment = document.getElementById('cancel-button')

button_AddComment.addEventListener('click', function (){
    const form = document.getElementById('form')
    form.setAttribute('style', 'display: show;')
    console.log("button clicked")
})

button_SubmitComment.addEventListener('click', function (){
    const form = document.getElementById('form')
    form.setAttribute('style', 'display: none;')
})

button_CancelComment.addEventListener('click', function (){
    const form = document.getElementById('form')
    form.setAttribute('style', 'display: none;')
})