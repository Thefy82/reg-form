document.getElementById('signUpForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        document.getElementById('message').textContent = 'Passwords do not match';
        document.getElementById('message').style.color = 'red';
    } else {
        document.getElementById('message').textContent = 'Registration successful!';
        document.getElementById('message').style.color = 'green';
    }
});

document.getElementById('signInForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'John Doe' && password === 'password') {
        document.getElementById('message').textContent = 'Login successful!';
        document.getElementById('message').style.color = 'green';
    } else {
        document.getElementById('message').textContent = 'Invalid credentials';
        document.getElementById('message').style.color = 'red';
    }
});
