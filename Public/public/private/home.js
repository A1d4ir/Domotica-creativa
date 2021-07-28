window.onload = function() {
    
    let topnavIconBtn = document.getElementById("icon-btn");

    topnavIconBtn.addEventListener("click", function() {
        
        desplegarMenu();

    });

    function desplegarMenu() {
        var x = document.getElementById("mainTopnav");
        if (x.className === "topnav"){
            x.className += " responsive";
        }else {
            x.className = "topnav";
        }
    }

    let abrirComunicaciones = document.getElementById("abrirComunicaciones");

    abrirComunicaciones.addEventListener("click", function() {

        window.open("http://127.0.0.1:5501/public/comunicaciones.html", "_self");

    });
}