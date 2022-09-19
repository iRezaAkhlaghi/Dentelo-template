const menu = document.querySelector('.menu');
const icon = document.querySelector('.menu-icon');
const btn = document.querySelector('.toggle');
const header = document.querySelector('.header-bottom')
const close = document.querySelector('.close');
const open = document.querySelector('.open');

btn.addEventListener('click', () => { 
  
    menu.classList.toggle('active');
  
  }
   
)


window.onscroll = function() {myFunction()};



var sticky = header.offsetTop;


function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
}
