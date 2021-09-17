const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();
  
    if (email && password) {
      const response = await fetch('/api/user/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to log in.');
      }
    }
  };
  
  const signupFormHandler = async (event) => {
    event.preventDefault();
    const name = document.querySelector('#name').value.trim();
    const username = document.querySelector('#username').value.trim();
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();
  
    if (name && username && email && password) {
      const response = await fetch('/api/user', {
        method: "POST",
        body: JSON.stringify({ name: name,  username: username, email: email, password: password }),
        headers: { 'Content-Type': 'application/json' },
      });
    console.log("THIS IS WORKING")
      document.location.replace('/')      
  
      if (response.ok) {
        console.log("this worked?")
      } else {
        alert('Failed to sign up.');
      }
    }
  };
  
  document.getElementById('loginButton')
    .addEventListener('submit', loginFormHandler);
  
  document
    .getElementById('registerButton')
    .addEventListener('submit', signupFormHandler);
  