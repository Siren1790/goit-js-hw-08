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


feedbackForm.addEventListener('input', throttle(saveLocalStorage, 500));

feedbackForm.addEventListener("submit", (event) => {
   event.preventDefault();
   if (!feedbackForm.email.value || !feedbackForm.message.value) {
      return alert('Не всі поля Заповнені.');
   }
   
   console.log(objForValues);
   Object.keys(objForValues).forEach(key => delete objForValues[key]);
   localStorage.clear();
   feedbackForm.reset();
})