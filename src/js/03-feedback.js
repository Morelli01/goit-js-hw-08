import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

form.addEventListener('input', throttle(function() {
  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}, 500));

document.addEventListener('DOMContentLoaded', function() {
  const savedFormData = localStorage.getItem('feedback-form-state');
  if (savedFormData) {
    const formData = JSON.parse(savedFormData);
    emailInput.value = formData.email;
    messageInput.value = formData.message;
  }
});

form.addEventListener('submit', function(event) {
  event.preventDefault();
  localStorage.removeItem('feedback-form-state');
  form.reset();
  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };
  console.log(formData);
});

