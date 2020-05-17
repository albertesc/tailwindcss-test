
/*  PENDIENTE DE REFACTORIZAR
    */

; (function (window, undefined) {
    "strict mode";

    // Ejemplos de uso de las funciones de validación de formularios
    let form    = document.getElementById('form');
    let send    = document.getElementById('sendBtn');
    let formInputs   = document.getElementsByClassName('form-group');

    formInputs.forEach(input => {
        let i = input.getElementsByTagName('input');
        let control = input
        let error = input.getElementsByClassName('errorMsg');
    });

    let name    = document.getElementById('name');
    let last    = document.getElementById('last');
    let email    = document.getElementById('email');

    send.addEventListener('click', event => {
        event.preventDefault();

        let v_name = valid_noempty(name);
        let v_last = valid_noempty(last);
        let v_email = valid_noempty(email);

        if(v_name && v_last && v_email) {
            form.submit();
        }
    })

    // Validar input sin rellenar
    function valid_noempty(input) {
        let result = false;
        let error = input.parentElement.getElementsByClassName('errorMsg');

        if (!is_empty(input.id)) {
            result = true;
            input.classList.remove('error');
            error.classList.add('hidden');
            console.log('error');
        } else {
            input.classList.add('error');
            error[0].classList.remove('hidden');
        }
        return result;
    }

    // Validar checkbox
    function valid_checked(checkbox) {
        let result = false;
        let error = checkbox.parentElement.getElementById('error');

        if (is_checked(checkbox.id)) {
            result = true;
            error.classList.remove('show');
            checkbox.classList.remove('error');
        } else {
            checkbox.classList.add('error');
            error.classList.add('show');
        }
        return result;
    }

    // Validar email
    function valid_email(email) {
        let result = false;
        let error = document.getElementById('errorEmail');

        if (!is_empty(email.id) && is_email(email.value)) {
            result = true;
            email.classList.remove('error');
            error.classList.remove('show');
        } else {
            email.classList.add('error');
            error.classList.add('show');
        }
        return result;
    }

    // Funciones -------------------------------
    function is_empty(id) {
        let result = false;

        if (document.getElementById(id).value == '') {
            result = true;
        }
        return result;
    }

    function is_checked(id) {
        let result = false;

        if (document.getElementById(id).checked) {
            result = true;
        }
        return result;
    }

    function is_email(str) {
        let result = false;
        let format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (format.test(str)) {
            result = true;
        }
        return result;
    }
})(window);
