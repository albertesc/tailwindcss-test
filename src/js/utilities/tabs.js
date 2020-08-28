; (function (window, undefined) {
    "strict mode";

    // Config
    // -----------------------
    /*  Coloca en la variable selector, la clase (con el . delante) de los elementos correspondientes de tu html ej:

        IMPORTANTE: Hay que aplicar el atributo data-tab en estos dos elementos con el valor
        de la id (sin #) del elemento que se quiere mostrar ej:

        <span class="tab" data-tab="tab1">Tab 1</span>
        <span class="tab" data-tab="tab2">Tab 2</span>

        Coloca en la variable selectorContent, la clase (con el . delante) de los elementos correspondientes de tu html ej:

        <div id="tab1" class="tab-content">...</div>
        <div id="tab2" class="tab-content">...</div>

        Ha estos dos elementos se les aplicará la clase "active" para el cambio de estado que puedes
        modificar con tu css.
        */

    let selectorTab = '.tab';
    let selectorTabSelect = '.tab-select'
    let selectorContent = '.tab-content'
    // -----------------------
    // End config

    let tabs = document.querySelectorAll(selectorTab);
    let tabsSelect = document.querySelectorAll(selectorTabSelect);
    let tabsContent = document.querySelectorAll(selectorContent);

    tabs.forEach(tab => {
        tab.addEventListener("click", event => {
            event.preventDefault();

            let dataTab = tab.getAttribute("data-tab");

            // remove tab clases active
            tabs.forEach(tabItem => {
                tabItem.classList.remove("active");
            });
            // add class active in current tab
            tab.classList.add("active");

            // remove tabcontent clases active
            tabsContent.forEach(content => {
                content.classList.remove("active");
            });
            // add class active in current tabcontent
            document.getElementById(dataTab).classList.add("active");

            let text = tab.parentElement.parentElement.getElementsByTagName('span');
            console.log(text);
        });
    });

    tabsSelect.forEach(select => {
        select.addEventListener('click', event => {
            event.preventDefault();

            let content = select.nextElementSibling;

            content.classList.toggle('hidden');
        })
    });
})(window);
