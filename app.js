let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 20;

function moveBackground(event) {
  const shapes = document.querySelectorAll(".shape");
  const x = event.clientX * scaleFactor;
  const y = event.clientY * scaleFactor;

  for(let i = 0; i < shapes.length; i++){
    const isOdd = i % 2 !== 0;
    const boolInt = isOdd ? -1 : 1;

    shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`
  }
}

function toggleContrast() {
  contrastToggle = !contrastToggle;
  
  if(contrastToggle){
    document.body.classList += " dark-theme";

  }
  else{
    document.body.classList.remove("dark-theme");
  }
}

async function contact(event) {
  //forms automatically refresh page
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");

  try {
    loading.classList += " modal__overlay--visible";
    await emailjs.sendForm(
      "service_b8m0ajc",
      "template_bwvkpgl",
      event.target,
      "PG6oe-AVHySM3CWZ9"
    );

    // throw Error("error");
    loading.classList.remove("modal__overlay--visible");
    success.classList += " modal__overlay--visible";
  } catch (error) {
    loading.classList.remove("modal__overlay--visible");
    alert(
      "The email service is temporarily unavailable. Please contact me directly on emmanuel.2001alonso.ec@gmail.com"
    );
  }
}

function toggleModal() {

  if(isModalOpen){
    isModalOpen = false
    return document.body.classList.remove('modal--open');
  }

  //toggle modal
  isModalOpen = true
  document.body.classList += " modal--open";
}
