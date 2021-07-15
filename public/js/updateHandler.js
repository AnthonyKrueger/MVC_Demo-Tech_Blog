const updateHandler = async (event) => {
    event.preventDefault()
    const postId = (event.target.dataset.postid);
    const title = document.querySelector("#title").value.trim()
    const text = document.querySelector("#text").value.trim()
    console.log(postId);
    const response = await fetch(`/api/posts/${postId}`, {
        method: 'PUT',
        body: JSON.stringify({title, text}),
        headers: { 'Content-Type': 'application/json' }
    })
    if(response.ok) {
        document.location.replace("/")
    }
}

document.querySelector(".editForm").addEventListener("submit", updateHandler)