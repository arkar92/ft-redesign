function openSolutionMenu() {
    var x = document.getElementById("solution-menu");
    var y = document.getElementById("product-menu");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
        y.className = y.className.replace(" w3-show", "");
    } else { 
        x.className = x.className.replace(" w3-show", "");
    }
}
    
function openProductMenu() {
    var x = document.getElementById("solution-menu");
    var y = document.getElementById("product-menu");
    if (y.className.indexOf("w3-show") == -1) {
        y.className += " w3-show";
        x.className = x.className.replace(" w3-show", "");
    } else { 
        y.className = y.className.replace(" w3-show", "");
    }
}    