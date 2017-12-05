var service = document.getElementById("service-menu");
var solution = document.getElementById("solution-menu");
var product = document.getElementById("product-menu");
var more = document.getElementById("more-menu");


function openSolutionMenu() {    
    if (solution.className.indexOf("w3-show") == -1) {
        solution.className += " w3-show";
        
        product.className = product.className.replace(" w3-show", "");
        service.className = service.className.replace(" w3-show", "");
        more.className = more.className.replace(" w3-show", "");
    } else { 
        solution.className = solution.className.replace(" w3-show", "");
    }
}
    
function openProductMenu() {    
    if (product.className.indexOf("w3-show") == -1) {
        product.className += " w3-show";
        
        solution.className = solution.className.replace(" w3-show", "");
        service.className = service.className.replace(" w3-show", "");
        more.className = more.className.replace(" w3-show", "");
    } else { 
        product.className = product.className.replace(" w3-show", "");
    }
}

function openServiceMenu() {
    
    if (service.className.indexOf("w3-show") == -1) {
        service.className += " w3-show";
        
        solution.className = solution.className.replace(" w3-show", "");
        product.className = product.className.replace(" w3-show", "");
        more.className = more.className.replace(" w3-show", "");
    } else { 
        service.className = service.className.replace(" w3-show", "");
    }
}

function openMoreMenu() {
    
    if (more.className.indexOf("w3-show") == -1) {
        more.className += " w3-show";
        
        solution.className = solution.className.replace(" w3-show", "");
        product.className = product.className.replace(" w3-show", "");
        service.className = service.className.replace(" w3-show", "");
    } else { 
        more.className = more.className.replace(" w3-show", "");
    }
}

// Home Page Slider JS
homeSlideShow = w3.slideshow(".home-slider", 4000);

// Home Page Special Promtion JS
promoSlideShow = w3.slideshow(".promoSlides", 4000);

// Slideshow Apartment Images
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
  }
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " w3-opacity-off";
}