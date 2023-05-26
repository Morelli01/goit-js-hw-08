import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');
const warningMessage = document.querySelector('.warning-message');

const saveFormState = throttle(() => {
  const formState = {
    email: emailInput.value,
    message: messageInput.value
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formState));
}, 500);

const fillFormFromState = () => {
  const savedState = localStorage.getItem('feedback-form-state');
  if (savedState) {
    const formState = JSON.parse(savedState);
    emailInput.value = formState.email || '';
    messageInput.value = formState.message || '';
  }
};

const clearFormState = () => {
  localStorage.removeItem('feedback-form-state');
  emailInput.value = '';
  messageInput.value = '';
};

const validateForm = () => {
  if (emailInput.value === '' || messageInput.value === '') {
    warningMessage.textContent = 'Please fill in all fields.';
  } else {
    warningMessage.textContent = '';
    const formState = {
      email: emailInput.value,
      message: messageInput.value
    };
    console.log(formState);
    clearFormState();
  }
};

emailInput.addEventListener('input', saveFormState);
messageInput.addEventListener('input', saveFormState);

window.addEventListener('load', fillFormFromState);

form.addEventListener('submit', (event) => {
  event.preventDefault();
  validateForm();
});