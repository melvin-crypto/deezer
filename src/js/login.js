document.addEventListener('DOMContentLoaded', function() {
    const loginFormBtn = document.getElementById('login-form-btn');
    const signupFormBtn = document.getElementById('signup-form-btn');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');

    loginFormBtn.addEventListener('click', function(event) {
        event.preventDefault();
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
        loginFormBtn.classList.add('active');
        signupFormBtn.classList.remove('active');
    });

    signupFormBtn.addEventListener('click', function(event) {
        event.preventDefault();
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
        loginFormBtn.classList.remove('active');
        signupFormBtn.classList.add('active');
    });
});
