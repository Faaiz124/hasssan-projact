const logoutBtn = document.getElementById('logout-btn');

logoutBtn.addEventListener('click', function() {
  localStorage.clear();
  sessionStorage.setItem('isLoggedIn', 'false');
  window.location.replace('index.html');
});

window.addEventListener('load', function() {
  if (sessionStorage.getItem('isLoggedIn') === 'true') {
    preventBackNavigation();
  }
});

function preventBackNavigation() {
  window.history.pushState(null, null, window.location.href);
  window.addEventListener('popstate', handlePopstate);
}

function handlePopstate(event) {
  event.preventDefault();
  window.history.pushState(null, null, window.location.href);
}
