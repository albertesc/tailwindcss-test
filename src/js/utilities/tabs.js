(function (window, undefined) {
	"strict mode";

	/** CONFIG
	 *
	 * Coloca en la variable selector, la clase (con el . delante) de los elementos correspondientes de tu html.
	 *
	 * IMPORTANTE: Hay que aplicar el atributo data-tab en estos dos elementos con el valor de la id (sin #) del elemento que se quiere mostrar
	 *
	 * Example:
	 * <span class="tab" data-tab="tab1">Tab 1</span>
	 * <span class="tab" data-tab="tab2">Tab 2</span>
	 *
	 * Coloca en la variable selectorContent, la clase (con el . delante) de los elementos correspondientes de tu html
	 *
	 * Example:
	 * <div id="tab1" class="tab-content">...</div>
	 * <div id="tab2" class="tab-content">...</div>
	 *
	 * Ha estos dos elementos se les aplicará la clase "active" para el cambio de estado que puedes
	 * modificar con tu css.
	 */

	const selectorTab = ".tab";
	const selectorContent = ".tabs__content";
	const selectorTabSelect = ".tabs__select";
	const activeClass = "active";

	const tabs = document.querySelectorAll(selectorTab);
	const tabsSelect = document.querySelectorAll(selectorTabSelect);
	const tabsContent = document.querySelectorAll(selectorContent);

	tabs.forEach((tab) => {
		tab.addEventListener("click", (event) => {
			event.preventDefault();

			let dataTab = tab.getAttribute("data-tab");

			// remove tab clases active
			tabs.forEach((tabItem) => {
				tabItem.classList.remove(activeClass);
			});
			// add class active in current tab
			tab.classList.add(activeClass);

			// remove tabcontent clases active
			tabsContent.forEach((content) => {
				content.classList.remove(activeClass);
			});
			// add class active in current tabcontent
			document.getElementById(dataTab).classList.add(activeClass);

			// change text selector mobile
			let text = tab.innerHTML;
			tab.parentElement.parentElement
				.querySelector(selectorTabSelect)
				.querySelector("span").innerText = text;

			// close tabs selector mobile
			tab.parentElement.classList.toggle(activeClass);
		});
	});

	tabsSelect.forEach((select) => {
		select.addEventListener("click", (event) => {
			event.preventDefault();

			let content = select.nextElementSibling;

			content.classList.toggle(activeClass);
		});
	});
})(window);
