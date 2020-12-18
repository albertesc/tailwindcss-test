import { CountUp } from 'CountUp.js';
import AOS from 'aos';
AOS.init({ once: true });

; (function (window, undefined) {
    'strict mode';

    /** CONFIG
     * 
     * IMPORTANTE:
     * Es necesario instalar las librerias -> AOS y CountUp.js con el siguiente comando:
     * 'npm i -D aos@3.0.0-beta.6 countup.js'
     * 
     * Coloca en la variable counters, las id's correspondientes de tu html.
     * 
     * Example:
     * <span class="..." id="counter1" data-aos data-aos-id="counter1" data-num="5000">0</span>
     * let counters = ['counter1', 'counter2', '...'];
     */

    const counters = [];

    const options = {
        separator: '.'
    };

    counters.forEach(counter => {
        let num = document.getElementById(counter).getAttribute('data-num')
        document.addEventListener('aos:in:' + counter, () => {
            new CountUp(counter, num, options).start();
        });
    })
})(window);