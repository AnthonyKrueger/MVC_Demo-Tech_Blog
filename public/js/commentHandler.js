
const commentHandler = async (event) => {
    event.preventDefault()
    const targetForm = event.target
    const commentData = targetForm.querySelector('.commentText')
    const text = commentData.value.trim()
    const postId = commentData.dataset.postid
    const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({text, postId}),
        headers: { 'Content-Type': 'application/json' }
    })
    if (response.ok) {
        document.location.reload()
    }
    else {
        document.location.replace('/login')
    }
}

const commentForms = document.querySelectorAll('.commentForm')
commentForms.forEach((form => {
    form.addEventListener('submit', commentHandler)
}))
