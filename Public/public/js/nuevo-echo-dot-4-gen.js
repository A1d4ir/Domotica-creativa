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
}