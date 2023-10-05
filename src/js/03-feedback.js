import throttle from 'lodash.throttle';
const feedbackForm = document.querySelector('.feedback-form');
const input = document.querySelector('[type = email]');
const textarea = document.querySelector('[name = message]');
const KEY_STORAGE = 'feedback-form';


feedbackForm.addEventListener('input', throttle(onInput, 500));
feedbackForm.addEventListener('submit', onSubmit);
window.addEventListener('load', savedMessage);

function onInput() {
  const feedback = {
    email: input.value,
    message: textarea.value,
  };

  localStorage.setItem(KEY_STORAGE, JSON.stringify(feedback));
}
function savedMessage() {
  const savedFeedback = localStorage.getItem(KEY_STORAGE);
  if (savedFeedback) {
    const { email, message } = JSON.parse(savedFeedback);
    input.value = email;
    textarea.value = message;
  }
}

function onSubmit(evt) {
  evt.preventDefault();
  const feedback = {
    email: input.value,
    message: textarea.value,
  };
  console.log(feedback);
  localStorage.removeItem(KEY_STORAGE);
  input.value = '';
  textarea.value = '';
}

