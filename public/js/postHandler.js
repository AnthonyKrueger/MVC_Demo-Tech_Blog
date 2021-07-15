
const postHandler = async (event) => {
    event.preventDefault()
    const title = document.querySelector('#title').value.trim()
    const text = document.querySelector('#text').value.trim()
    console.log(title)
    const response = await fetch("/api/posts", {
        method: 'POST',
        body: JSON.stringify({title, text}),
        headers: { 'Content-Type': 'application/json' }
    })
    if(response.ok) {
        document.location.reload()
    }
    else {
        document.location.replace('/login')
    }
}

document.querySelector('.postForm')
    .addEventListener('submit', postHandler)