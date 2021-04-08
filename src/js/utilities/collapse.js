(function (window, undefined) {
	"strict mode";

	/** CONFIG
	 *
	 * Coloca en la variable buttonSelector, la clase (con el . delante) de los elementos correspondientes
	 * de tu html.
	 *
	 * IMPORTANTE: Hay que aplicar el atributo data-collapse en estos dos elementos con el valor
	 * de la id (sin #) del elemento que se quiere mostrar/ocultar.
	 *
	 * Example:
	 * <span class="collapse " data-collapse="element">Button</span>
	 * <div id="element">...</div>
	 *
	 * Al elemento oculto se les aplicará la clase "active" para el cambio de estado que puedes
	 * modificar con tu css.
	 */

	const buttonSelector = ".collapse";

	const buttons = document.querySelectorAll(buttonSelector);

	buttons.forEach((button) => {
		button.addEventListener("click", (event) => {
			event.preventDefault();

			let dataCollapse = button.getAttribute("data-collapse");
			document.getElementById(dataCollapse).classList.toggle("active");
		});
	});
})(window);
