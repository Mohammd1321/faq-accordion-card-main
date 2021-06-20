'use strict';

const buttons = document.querySelectorAll('.ask');


buttons.forEach(button => {
  button.addEventListener('click',function(e) {
    buttons.forEach(one => {
      let question = one.closest('.questions');
      if(question != button.closest('.questions')) {
        question.classList.remove('active');
      }
    })
    button.closest('.questions').classList.toggle('active');
  })
})

