module.exports = function () {
    return function ({ addVariant, addComponents, e }) {
        addVariant('before', ({ modifySelectors, separator }) => {
            modifySelectors(({ className }) => {
                return `.before${e(`${separator}${className}`)}::before`
            })
        });

        addComponents({
            '.before::before': {
                'content': '""'
            }
        });
    }
}