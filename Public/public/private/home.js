function myFunction() {
    var x = document.getElementById("mainTopnav");
    if (x.className === "topnav"){
        x.className += " responsive";
    }else {
        x.className = "topnav";
    }
}