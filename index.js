// service_5kug93e
// template_a0rr73f
// NBhrdQIgGtK1W9U0K



// function sendMail() {
//   let parms = {
//     name : document.getElementById("name").value,
//     email : document.getElementById("email").value,
//     message : document.getElementById("message").value,
//   }

//   emailjs.send("service_5kug93e","template_a0rr73f",parms).then(alert('Email Sent!!'))
// }



function contact(event) {

  event.preventDefault();

  const loading = document.querySelector('.modal__overlay--loading');
  const success = document.querySelector('.modal__overlay--success');

  loading.classList += " modal__overlay--visible";

  emailjs
    .sendForm(
      'service_5kug93e',
      'template_a0rr73f',
      event.target,
      'NBhrdQIgGtK1W9U0K'

  ).then(() => {

    loading.classList.remove("modal__overlay--visible");
    success.classList += " modal__overlay--visible";

  }).catch(() => {

    loading.classList.remove("modal__overlay--visible");

    alert(
      "The email service is temporarily unavailable. Please, contact me directly on nuxoxoma@mailgolem.com"
    );
  })
} 


// Lesson @ 2:00:00