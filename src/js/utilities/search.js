; (function (window, undefined) {
    'strict mode';

    let buttonSelector = 'searchButton';
    let formSelector = 'headerSearch';

    let searchButton = document.getElementById(buttonSelector);

    searchButton.addEventListener('click', () => {
        document.getElementById(formSelector).classList.toggle('active');
    });

})(window);
