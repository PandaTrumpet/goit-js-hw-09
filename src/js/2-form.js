const KEY_LOCAL = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

form.addEventListener('input', event => {
  const email = event.target.form.email.value.trim();
  const message = event.target.form.message.value.trim();
  const localMessage = { email, message };
  const json = JSON.stringify(localMessage);
  localStorage.setItem(KEY_LOCAL, json);
  return { email, message };
});

form.addEventListener('submit', event => {
  event.preventDefault();
  const output = {
    email: event.currentTarget.email.value.trim(),
    message: event.currentTarget.message.value.trim(),
  };
  if (
    event.currentTarget.email.value.trim() &&
    event.currentTarget.message.value.trim()
  ) {
    console.log(output);
  }
  localStorage.clear();
  form.reset();
});

const localData = localStorage.getItem(KEY_LOCAL);
if (localData) {
  const dataInfo = JSON.parse(localData);
  form.email.value = dataInfo.email;
  form.message.value = dataInfo.message;
}
