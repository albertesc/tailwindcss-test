; (function (window, undefined) {
    'strict mode';

    // Config
    // -----------------------
    /*  Coloca las id's (sin #) de los elementos correspondientes de tu html ej:
        <div id="cookiesMessage">...<span id="cookiesAccept" class="">Acceptar</span></div>

        Coloca las id's de los elementos que quedan solapados con las cookies en la variable disturbElements ej:
        let disturbElements = ['upButton', 'element1', '...'];
        */

    let cookiesElement = 'cookiesMessage';
    let cookiesBtn = 'cookiesAccept';
    let disturbElements = ["upButton"];
    // -----------------------
    // End config

    cookies = document.getElementById(cookiesElement);

    if (cookies) {
        let btn = document.getElementById(cookiesBtn);
        let cookiesHeight = cookies.offsetHeight; 

        btn.addEventListener('click', function () {
            cookies.remove();
            document.cookie = "accept_cookies=yes; expires=Fri, 31 Dec 9999 23:59:59 GMT";

            if(disturbElements.length > 0) {
                disturbElements.forEach(element => {
                    document.getElementById(element).style.bottom = 0;
                })
            }
        });

        if(disturbElements.length > 0) {
            disturbElements.forEach(element => {
                document.getElementById(element).style.bottom = cookiesHeight + "px";
            })
        }
    }
})(window);
