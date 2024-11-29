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



// const form = document.querySelector("#contact__form");


// function contact(event) {

//   form.form.addEventListener("submit", contact);

//   event.preventDefault();

//   const loading = document.querySelector('.modal__overlay--loading');
//   const success = document.querySelector('.modal__overlay--success');

//   // loading.classList += " modal__overlay--visible";
//   loading.classList.add(" modal__overlay--visible");

//   emailjs
//     .sendForm(
//       'service_5kug93e',
//       'template_a0rr73f',
//       event.target,
//       'NBhrdQIgGtK1W9U0K'

//   ).then(() => {

//     loading.classList.remove("modal__overlay--visible");
//     success.classList.add("modal__overlay--visible");

//   }).catch(() => {

//     loading.classList.remove("modal__overlay--visible");

//     alert(
//       "The email service is temporarily unavailable. Please, contact me directly on nuxoxoma@mailgolem.com"
//     );
//   })
// } 



function contact(event) {

  event.preventDefault();

  const loading = document.querySelector('.modal__overlay--loading');
  const success = document.querySelector('.modal__overlay--success');

  loading.classList.add("modal__overlay--visible");

  emailjs.sendForm('service_5kug93e', 'template_a0rr73f', event.target, 'NBhrdQIgGtK1W9U0K'

  ).then(() => { 
  
    loading.classList.remove('modal__overlay--visible');
    success.classList.add('modal__overlay--visible');

  }).catch(() => {

    loading.classList.remove('modal__overlay--visible');

    event.preventDefault()

    alert('The Email service is temporarily unavailable , so please contact me diractly on nuxoxoma@mailgolem.com');
  
  });

  // setTimeout(() => {
    
  //   console.log('Success!');

  // }, 1000);

}


function toggleModal() {

  
}