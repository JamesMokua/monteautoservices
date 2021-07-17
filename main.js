//select element function
const selectElement = function (element) {
  return document.querySelector(element);
};

let navbar = selectElement('.navbar');
let body = selectElement('body');

navbar.addEventListener('click', function () {
  body.classList.toggle('open');
});

window.onload = function () {
  const EFFECT = document.querySelector('.effect');
  window.addEventListener('scroll', scrollEffect);

  function scrollEffect() {
    if (window.scrollY >= 500) {
      EFFECT.style.opacity = '1';
      EFFECT.style.transform = 'translateX(0px)';
      EFFECT.style.transition = '1s ease-in'
    }
    else {
      EFFECT.style.opacity = '0';
      EFFECT.style.transform = 'translateX(-50px)';
    }
  }
  scrollEffect();
}

// Set the date we're counting down to
var countDownDate = new Date("Jan 1, 2021 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

//scroll reveal
window.sr = ScrollReveal();

sr.reveal('.animateleft', {
  origin: 'left',
  duration: 1000,
  distance: '25rem',
  delay: 300
});

sr.reveal('.animateright', {
  origin: 'right',
  duration: 1000,
  distance: '25rem',
  delay: 600
});

sr.reveal('.animatetop', {
  origin: 'top',
  duration: 1000,
  distance: '25rem',
  delay: 600
});

sr.reveal('.animatebottom', {
  origin: 'bottom',
  duration: 1000,
  distance: '25rem',
  delay: 600
});

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

