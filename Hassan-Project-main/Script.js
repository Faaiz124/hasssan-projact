// User account information stored in JSON format
const loginForm = document.getElementById('login-form');
const logoutBtn = document.getElementById('logout-btn');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');



const accounts = [
  {  email: 'hasanimranishaque@gmail.com', password: '12345'},
  {  email: 'syedsamarali398@gmail.com', password: '12345'},
  {  email: 'huzaifameo48@gmail.com', password: '12345'},
  {  email: 'hussainimran0x@gmail.com', password: '12345' }
];

export default accounts;
const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';

if (isLoggedIn) {
  loginForm.style.display = 'none';
} else {
  loginForm.style.display = 'block';
}

loginForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const username = usernameInput.value;
  const password = passwordInput.value;

  const user = accounts.find(account => account.email === username && account.password === password);

  if (user) {
    localStorage.setItem('Email',username)
    localStorage.setItem('Pass',password)
    // Successful login
    // alert('Login successful!');
    loginForm.reset();
    sessionStorage.setItem('isLoggedIn', 'true');
    handleLoginStatus();
    window.location.href = 'portal.html';
    

  } else {
    // Invalid login credentials
    alert('Invalid username or password. Please try again.');
  }
});

logoutBtn.addEventListener('click', function() {
  sessionStorage.setItem('isLoggedIn', 'false');
  handleLoginStatus();
  clearSessionHistory();
  window.location.href = 'portal.html';
});

function clearSessionHistory() {
  if (window.history && window.history.state) {
    window.history.replaceState(null, null, window.location.href);
    window.history.pushState(null, null, window.location.href);
  }
}

function handleLoginStatus() {
  if (sessionStorage.getItem('isLoggedIn') === 'true') {
    loginForm.style.display = 'none';
    preventBackNavigation();
  } else {
    loginForm.style.display = 'block';
    enableBackNavigation();
  }
}

function preventBackNavigation() {
  window.history.pushState(null, null, window.location.href);
  window.addEventListener('popstate', function(event) {
    event.preventDefault();
    sessionStorage.removeItem('isLoggedIn');
    window.location.href = 'portal.html';
  });
}

function enableBackNavigation() {
  window.removeEventListener('popstate', function(event) {
    event.preventDefault();
    sessionStorage.removeItem('isLoggedIn');
    window.location.href = 'portal.html';
  });
}

if (isLoggedIn) {
  preventBackNavigation();
} else {
  enableBackNavigation();
}








// new////////

