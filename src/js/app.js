import $$ from 'dom7';
import Framework7 from 'framework7/framework7.esm.bundle.js';

// Import F7 Styles
import 'framework7/css/framework7.bundle.css';

// Import Icons and App Custom Styles
import '../css/icons.css';
import '../css/app.css';
import '../css/estilos.css';

// Import Routes
import routes from './routes.js';

// Import main app component
import App from '../app.f7.html';

var app = new Framework7({
    root: '#app', // App root element
    component: App, // App main component

    name: 'Postres', // App name
    theme: 'auto', // Automatic theme detection

    // App routes
    routes: routes,
    lazy: {
        threshold: 50,
        sequential: false,
    },

});
$(document).ready(function () {
    $(".card card-expandable").on("click", function () {
        $('.busqueda').toggle();
    });
});
$$('img.lazy').trigger('lazy');
$$('div.lazy').trigger('lazy');

//preloader
$(document).on('click', '.icono-perfil', function () {
    $('.icono-perfil').click(function () {
        myFunction(this);
    });

    function myFunction(div) {
        $('#loader').toggle();
        $(div).toggle();

    }
    setTimeout(function () {
        $('#onload').remove();
        window.open(link);
    }, 1000); //2 seconds
});

//abrir popup
//var abrirPopupInicial = app.popup.open(".popup-inicial");
$(document).ready(function () {
    app.popup.open(".popup-inicial");
});
var cerrarPopup;

function cerrar_popup() {
    cerrar_popup = setTimeout(function () {
        var abrirPopupinicial = app.popup.close(".popup-inicial", true);
    }, 2000);
}
cerrar_popup()

//creditos
var accordions = document.querySelectorAll(".accordion");

for (var i = 0; i < accordions.length; i++) {
  accordions[i].onclick = function() {
    this.classList.toggle("active");
    this.nextElementSibling.classList.toggle("show");
  };
}
