; (function (window, undefined) {
    'strict mode';

    // Config
    // -----------------------
    /*  Coloca en la variable selector, la clase (con el . delante) de los bottones de accordion correspondientes de tu html ej:

        <div class="accordion__button ">Button</div>
        <div class="accordion__content ">Lorem ...</div>
        */

    let buttonSelector = '.accordion__button';
    // -----------------------
    // End config

    let accordionButtons = document.querySelectorAll(buttonSelector);

    accordionButtons.forEach(button => {
        button.addEventListener("click", event => {
            event.preventDefault();

            button.classList.toggle("active");
            let content = button.nextElementSibling;

            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });
})(window);
