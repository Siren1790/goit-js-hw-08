const feedbackForm = document.querySelector('.feedback-form');


const xxx = (x) => {
   console.log(x);
   let targetName = x.target.name;
   let targetValue = x.target.value;

   console.log(targetName);
   console.log(targetValue);
}


feedbackForm.addEventListener('keyup', xxx);