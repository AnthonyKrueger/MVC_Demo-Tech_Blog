const loginHandler = async (event) => {
    event.preventDefault()
    const username = document.querySelector('#loginusername').value.trim();
    const password = document.querySelector('#loginpassword').value.trim()
    const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({username, password}),
        headers: { 'Content-Type': 'application/json' }
    })
    if (response.ok) {
        document.location.replace('/');
        console.log(response)
    }
    else {
        const warningText = document.querySelector('.warningText')
        console.log(response)
        warningText.innerHTML = "Login failed: Invalid Username or Password"
    }
}

const signupHandler = async (event) => {
    event.preventDefault()
    const username = document.querySelector('#signupusername').value.trim();
    const password = document.querySelector('#signuppassword').value.trim()
    const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({username, password}),
        headers: { 'Content-Type': 'application/json' }
    })
    if (response.ok) {
        document.location.replace('/');
        console.log(response)
      } else {
        alert('Failed to sign up.');
      }

}

document.querySelector('.loginForm').addEventListener('submit', loginHandler)
document.querySelector('.signupForm').addEventListener('submit', signupHandler)