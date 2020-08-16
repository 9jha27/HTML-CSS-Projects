function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function validateForm() {
  var x = document.forms["myForm"]["name"].value;
  var y = document.forms["myForm"]["email"].value;
  if (x == "") {
    alert("Please fill in your name.");
    return false;
  }
  if (y == "") {
    alert("Please fill in your email.");
    return false;
  }
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

//SLIDESHOW

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

//AJAX
var ajax = new XMLHttpRequest();
ajax.open('GET', 'submit.html');
ajax.onreadystatechange = function() {
    if (ajax.readyState == 4) {
        document.getElementById('myForm').innerHTML = ajax.responseText;
    }
}
function loadDoc() {
    ajax.send();
    document.getElementById('sendbtn').style.display = 'none';
} 