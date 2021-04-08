(function (window, undefined) {
	"strict mode";

	/** CONFIG
	 *
	 * Coloca las id's (sin #) de los elementos correspondientes de tu html
	 * Ha estos dos elementos se les aplicará la clase "open" para el cambio de estado que puedes
	 * modificar con tu css.
	 *
	 * IMPORTANTE: Hay que aplicar el atributo data-toggle en estos dos elementos con el valor
	 * de la id (sin #) del elemento que se quiere modificar ej:
	 *
	 * Example:
	 * <a href="#" data-toggle="menu" id="menuOpen" class="" title="...">Abrir</a>
	 * <a href="#" data-toggle="menu" id="menuClose" class="" title="...">Cerrar</a>
	 * <div id="menu">...</div>
	 */

	const openSelector = "#menuOpen";
	const closeSelector = "#menuClose";

	const open = document.querySelector(openSelector);
	const close = document.querySelector(closeSelector);

	open.addEventListener("click", (event) => {
		event.preventDefault();

		open.classList.add("open");
		let element = open.getAttribute("data-toggle");
		document.getElementById(element).classList.add("open");
	});

	close.addEventListener("click", (event) => {
		event.preventDefault();

		close.classList.remove("open");
		let element = close.getAttribute("data-toggle");
		document.getElementById(element).classList.remove("open");
	});
})(window);
