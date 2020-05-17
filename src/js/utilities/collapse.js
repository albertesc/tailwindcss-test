; (function (window, undefined) {
    "strict mode";

    // Config
    // -----------------------
    /*  Coloca en la variable selectorButton, la clase (con el . delante) de los elementos correspondientes de tu html ej:

        IMPORTANTE: Hay que aplicar el atributo data-collapse en estos dos elementos con el valor
        de la id (sin #) del elemento que se quiere mostrar/ocultar ej:

        <span class="collapse " data-collapse="element">Button</span>
        <div id="element">...</div>

        Al elemento oculto se les aplicará la clase "active" para el cambio de estado que puedes
        modificar con tu css.
        */

    let selectorButton = '.collapse';
    // -----------------------
    // End config

    let buttons = document.querySelectorAll(selectorButton);

    buttons.forEach(button => {
        button.addEventListener("click", event => {
            event.preventDefault();

            let dataCollapse = button.getAttribute("data-collapse");
            document.getElementById(dataCollapse).classList.toggle("active");
        });
    });
})(window);
