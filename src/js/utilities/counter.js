// Config
// -----------------------
/*  PREREQUISITOS: AOS y CountUp.js

    'npm i -D aos@3.0.0-beta.6 countup.js'

    Coloca en la variable counters, las id's correspondientes de tu html ej:
    <span class="..." id="counter1" data-aos data-aos-id="counter1" data-num="5000">0</span>
    let counters = ['counter1', 'counter2', '...'];
    */

import { CountUp } from 'CountUp.js';
import AOS from 'aos';
AOS.init({ once: true });

const counters = ['counter1'];
const options = {
    separator: '.'
};

counters.forEach(counter => {
    let num = document.getElementById(counter).getAttribute('data-num')
    document.addEventListener('aos:in:' + counter, () => {
        new CountUp(counter, num, options).start();
    });
})
