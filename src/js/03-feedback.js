import throttle from "lodash.throttle";

const keyLocal = 'feedback-form-state';
const feedbackForm = document.querySelector('.feedback-form');
const savedSettings = JSON.parse(localStorage.getItem(keyLocal));



const objForValues = {
   ...savedSettings,
};

const addValuesFromLocStor = function ({ email = '', message = '' }) {
   feedbackForm.email.value = email;
   feedbackForm.message.value = message;
};

if (savedSettings)
   addValuesFromLocStor(objForValues);

const saveLocalStorage = (evt) => {
   objForValues[evt.target.name] = evt.target.value;
   localStorage.setItem(keyLocal, JSON.stringify(objForValues));
};


feedbackForm.addEventListener('input', throttle(saveLocalStorage, 2000));

feedbackForm.addEventListener("submit", (event) => {
   event.preventDefault();
   console.log("Input email: ", event.target.email.value);
   console.log("Input textarea: ", event.target.message.value);
})