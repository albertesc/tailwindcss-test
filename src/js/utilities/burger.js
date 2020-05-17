; (function (window, undefined) {
    'strict mode';

    // Config
    // -----------------------
    /*  Coloca las id's (sin #) de los elementos correspondientes de tu html

        Ha estos dos elementos se les aplicará la clase "open" para el cambio de estado que puedes
        modificar con tu css.

        IMPORTANTE: Hay que aplicar el atributo data-toggle en estos dos elementos con el valor
        de la id (sin #) del elemento que se quiere modificar ej:

        buttonOpen  -> <a href="#" data-toggle="menu" id="menuOpen" class="" title="...">Abrir</a>
        buttonClose -> <a href="#" data-toggle="menu" id="menuClose" class="" title="...">Cerrar</a>
        menu        -> <div id="menu">...</div>
        */

    let buttonOpen = 'menuOpen';
    let buttonClose = 'menuClose';
    // -----------------------
    // End config

    let open = document.getElementById(buttonOpen);
    let close = document.getElementById(buttonClose);

    open.addEventListener('click', event => {
        event.preventDefault();

        open.classList.add('open');
        let element = open.getAttribute('data-toggle')
        document.getElementById(element).classList.add('open');
    });

    close.addEventListener('click', event => {
        event.preventDefault();

        close.classList.remove('open');
        let element = close.getAttribute('data-toggle')
        document.getElementById(element).classList.remove('open');
    });
})(window);
