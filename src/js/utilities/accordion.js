; (function (window, undefined) {
    'strict mode';

    /** 
     * CONFIG
     * 
     * Coloca en la variable selector, la clase (con el . delante) de los bottones de accordion correspondientes de tu html ej:
     * <div class="accordion__button ">Button</div>
     * <div class="accordion__content ">Lorem ...</div>
     */

    const selector = '.accordion__button';

    const accordionButtons = document.querySelectorAll(selector);

    accordionButtons.forEach(button => {
        button.addEventListener("click", event => {
            event.preventDefault();

            button.classList.toggle("accordion__button--active");
            let content = button.nextElementSibling;

            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });
})(window);
