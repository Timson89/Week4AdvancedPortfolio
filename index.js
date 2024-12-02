// service_5kug93e
// template_a0rr73f
// NBhrdQIgGtK1W9U0K

let contrastToggle = false;

function toggleContrast() {

  contrastToggle = !contrastToggle;

  if (contrastToggle) {
    document.body.classList.add('dark-theme');
  } else {
    document.body.classList.remove('dark-theme');
  }
}

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
}

let isModalOpen = false;

function toggleModal() {

  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove('modal--open');
  }

  isModalOpen = !isModalOpen;
  document.body.classList.add('modal--open');
}