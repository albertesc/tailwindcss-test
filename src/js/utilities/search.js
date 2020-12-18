; (function (window, undefined) {
    'strict mode';

    const buttonSelector = 'searchButton';
    const formSelector = 'headerSearch';

    const searchButton = document.getElementById(buttonSelector);

    searchButton.addEventListener('click', () => {
        document.getElementById(formSelector).classList.toggle('active');
    });
})(window);
