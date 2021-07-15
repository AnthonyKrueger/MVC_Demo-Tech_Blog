const deleteButtonHandler = async (event) => {
    event.preventDefault()
    const postId = (event.target.dataset.postid);
    const response = await fetch(`/api/posts/${postId}`, {
        method: 'DELETE'
    })
    if(response.ok) {
        document.location.reload()
    }
}

const editButtonHandler = async (event) => {
    event.preventDefault()
    const postId = (event.target.dataset.postid);
    document.location.replace(`/edit/${postId}`)
}

const deleteButtons = document.querySelectorAll(".deletePostButton")
const editButtons = document.querySelectorAll(".editPostButton")

deleteButtons.forEach((button) => {
    button.addEventListener("click", deleteButtonHandler)
})

editButtons.forEach((button) => {
    button.addEventListener("click", editButtonHandler)
})



