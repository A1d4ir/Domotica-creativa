window.onload = function () {
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

    let reseñaEcho4Gen = document.getElementById('reseña-echodot-4ta-gen');

    reseñaEcho4Gen.addEventListener('click', function() {

        window.open('./nuevo-echo-dot-4-gen.html', '_self');

    });

    let reseñaLc1192 = document.getElementById('reseña-lc-1192');

    reseñaLc1192.addEventListener('click', function() {

        window.open('./foco-inteligente-lloyds.html', '_self');

    });
    
}