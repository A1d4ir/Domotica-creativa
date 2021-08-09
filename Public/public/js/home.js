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

    let abrirComunicaciones = document.getElementById('abrir-comunicaciones');

    abrirComunicaciones.addEventListener("click", function() {

        window.open("./comunicaciones.html", "_self");

    });

    let abrirGestionEnergia = document.getElementById('abrir-gestion-energia');

    abrirGestionEnergia.addEventListener("click", function() {

        window.open("./gestion-energia.html", "_self");
        
    });

    let abrirSeguridad = document.getElementById('abrir-seguridad');

    abrirSeguridad.addEventListener("click", function() {

        window.open("./seguridad.html", "_self");

    });

    let abrirConfort = document.getElementById('abrir-confort');

    abrirConfort.addEventListener("click", function() {

        window.open("./confort.html", "_self");

    });

    let abrirAccesibilidad = document.getElementById('abrir-accesibilidad');

    abrirAccesibilidad.addEventListener("click", function() {

        window.open("./accesibilidad.html", "_self");

    });

    let abrirAmazonAlexa = document.getElementById('abrir-amazon-alexa');

    abrirAmazonAlexa.addEventListener("click", function() {

        window.open("./amazon-alexa.html", "_self");

    });

    let abrirAssistant = document.getElementById('abrir-assistant');

    abrirAssistant.addEventListener("click", function() {

        window.open("./assistant.html", "_self");

    });

    let abrirHomeKit = document.getElementById('abrir-homekit');

    abrirHomeKit.addEventListener("click" , function() {

        window.open("./homekit.html", "_self");

    });

    let abrirSmartThings = document.getElementById('abrir-smartThings');

    abrirSmartThings.addEventListener("click", function() {

        window.open("./SmartThings.html", "_self");

    });

    let abrirSmartThinQ = document.getElementById('abrir-smartThinq');

    abrirSmartThinQ.addEventListener("click", function() {

        window.open("./SmartThinQ.html", "_self");

    });

}