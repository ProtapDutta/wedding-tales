// Toggle between forms
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const formTitle = document.getElementById('form-title');

document.querySelectorAll('.btn-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-target');
        if (target === 'login') {
            loginForm.classList.remove('d-none');
            registerForm.classList.add('d-none');
            formTitle.textContent = 'Login';
        } else {
            registerForm.classList.remove('d-none');
            loginForm.classList.add('d-none');
            formTitle.textContent = 'Register';
        }
    });
});


