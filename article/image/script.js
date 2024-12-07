let users = JSON.parse(localStorage.getItem('users')) || [];

function register() {
	const regUsername = document.getElementById('reg-username').value;
	const regPassword = document.getElementById('reg-password').value;
	const regConfirmPassword = document.getElementById('reg-confirm-password').value;

	if (regPassword !== regConfirmPassword) {
		alert('Passwords do not match');
		return;
	}

	const existingUser = users.find(user => user.username === regUsername);

	if (existingUser) {
		alert('Username already exists');
		return;
	}

	users.push({ username: regUsername, password: regPassword });
	localStorage.setItem('users', JSON.stringify(users));
	showLoginForm();
}

function login() {
	const username = document.getElementById('username').value;
	const password = document.getElementById('password').value;

	const user = users.find(user => user.username === username && user.password === password);

	if (!user) {
		alert('Invalid username or password');
		return;
	}

	// Login successful, redirect or display protected content
	alert('Login successful!');
}

function showRegisterForm() {
	document.getElementById('login-form').style.display = 'none';
	document.getElementById('register-form').style.display = 'block';
}

function showLoginForm() {
	document.getElementById('login-form').style.display = 'block';
	document.getElementById('register-form').style.display = 'none';
}