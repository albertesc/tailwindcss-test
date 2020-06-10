; (function (window, undefined) {
    'strict mode';

    // Config
    // -----------------------
    /*  Este script sirve para poner la clase header-fixed en el header al hacer scroll hacia abajo y así poder
        cambiar los estilos css del header.

        Para activarlo pon true en la variable active.
        */

    let active = false;
    // -----------------------
    // End config

    var header = document.getElementsByTagName('header');

    if (active) {
        window.addEventListener('scroll', () => {
            if (document.documentElement.scrollTop >= 1) {
                header[0].classList.add('header-fixed');
            } else {
                header[0].classList.remove('header-fixed');
            }
        });
    }
})(window);
