; (function (window, undefined) {
    'strict mode';

    // Config
    // -----------------------
    /*  Coloca en la variable selector, la clase (con el . delante) de los elementos correspondientes de tu html ej:

        <a href="#contacto" class="anchor ">Contacto</a>
        <a href="#empresa" class="anchor ">Empresa</a>
        ...
        <section id="contacto"> ... </section>
        <section id="empresa"> ... </section>

        Puedes seleccionar la duración de la animación en milisegundos en la variable duration.
        Si necesitas un margen para headers fixed, por ejemplo, pues modificarlo en la variable margin.
        */

    let selector = '.anchor';
    let duration = 1000;
    let margin = 50;
    // -----------------------
    // End config

    anchorLinks = document.querySelectorAll(selector);

    anchorLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            let anchor = document.querySelector(link.hash);

            if(anchor != null) {
                scrollTo(document.documentElement, anchor.offsetTop - margin, duration);
            }
        });
    });

    // Important Functions ---------------------
    function scrollTo(element, to, duration) {
        let start = element.scrollTop,
            change = to - start,
            currentTime = 0,
            increment = 20;

        let animateScroll = () => {
            currentTime += increment;
            let val = Math.easeInOutQuad(currentTime, start, change, duration);
            element.scrollTop = val;
            if (currentTime < duration) {
                setTimeout(animateScroll, increment);
            }
        };
        animateScroll();
    }

    // Unimportant Functions --------------------
    Math.easeInOutQuad = function (t, b, c, d) { t /= d / 2; if (t < 1) { return c / 2 * t * t + b } t--; return -c / 2 * (t * (t - 2) - 1) + b; };
})(window);
