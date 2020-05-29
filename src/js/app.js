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

$(document).ready(function () {
                function showWindow() {
                    $('#onload').show();
                    $('.hidden').css('overflow', 'hidden');
                    setTimeout(hideWindow, 1000)
                }

                function hideWindow() {
                    $('#onload').hide();
                    $('.hidden').css('overflow', 'scroll');
                }
                setTimeout(showWindow, 1000)
            })
