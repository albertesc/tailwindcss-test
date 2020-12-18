; (function (window, undefined) {
    'strict mode';

    /** CONFIG
     * Coloca en la variable selector, el id (sin #) del elemento correspondientes de tu html.
     * 
     * Example:
     * <span class="" id="upButton">Contacto</span>
     * 
     * Puedes seleccionar la duración de la animación en milisegundos en la variable duration.
     * Puedes hacer que en el top de la página, el botón desaparezca colocando un true en la variable disableOnTop.
     */

    const selector = 'upButton';
    const duration = 1000;
    const disableOnTop = true;

    const elem = document.getElementById(selector);

    if (disableOnTop) {
        window.addEventListener('scroll', () => {
            if (document.documentElement.scrollTop >= 100) {
                elem.classList.add('active');
            } else {
                elem.classList.remove('active');
            }
        })
    }

    elem.addEventListener('click', event => {
        event.preventDefault();
        scrollTo(document.documentElement, 0, duration);
    });

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

    Math.easeInOutQuad = function (t, b, c, d) { t /= d / 2; if (t < 1) { return c / 2 * t * t + b } t--; return -c / 2 * (t * (t - 2) - 1) + b; };
})(window);
