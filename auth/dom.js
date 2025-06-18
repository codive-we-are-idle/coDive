export const elements = {
  loginBtn: document.querySelector('#login-button'),
  joinBtn: document.querySelector('#join-button'),
  githubBtn: document.querySelector('#github-btn'),
  modalCloseBtn: document.querySelector('#close-btn'),
  loginModal: document.querySelector('#login-modal'),
  authSection: document.querySelector('.auth'),
  loggedSection: document.querySelector('.auth-logged'),
  logoutBtn: document.querySelector('#logout'),
};

export const renderAuthSection = () => {
  const code = new URLSearchParams(window.location.search).get('code');
  if (code) {
    elements.authSection.classList.remove('show');
    elements.loggedSection.classList.add('show');
  } else {
    elements.authSection.classList.add('show');
    elements.loggedSection.classList.remove('show');
  }
};
