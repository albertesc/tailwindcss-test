(function (window, undefined) {
	"strict mode";

	/** CONFIG
	 *
	 * Coloca las id's (sin #) de los elementos correspondientes de tu html.
	 *
	 * Example:
	 * <div id="cookiesMessage">...<span id="cookiesAccept" class="">Acceptar</span></div>
	 *
	 * Coloca las id's de los elementos que quedan solapados con las cookies en la variable disturbElements ej:
	 * let disturbElements = ['upButton', 'element1', '...'];
	 */

	const cookiesElement = "cookiesMessage";
	const cookiesBtn = "cookiesAccept";
	const disturbElements = [];

	const cookies = document.getElementById(cookiesElement);

	if (cookies) {
		const btn = document.getElementById(cookiesBtn);
		const cookiesHeight = cookies.offsetHeight;

		btn.addEventListener("click", function () {
			cookies.remove();
			document.cookie =
				"accept_cookies=yes; expires=Fri, 31 Dec 9999 23:59:59 GMT";

			if (disturbElements.length > 0) {
				disturbElements.forEach((element) => {
					document.getElementById(element).style.bottom = 0;
				});
			}
		});

		if (disturbElements.length > 0) {
			disturbElements.forEach((element) => {
				document.getElementById(element).style.bottom = cookiesHeight + "px";
			});
		}
	}
})(window);
