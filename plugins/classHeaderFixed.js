module.exports = function () {
    return function ({ addVariant, e }) {
        addVariant('header-fixed', ({ modifySelectors, separator }) => {
            modifySelectors(({ className }) => {
                return `.header-fixed .${e(`header-fixed${separator}${className}`)}`
            })
        })
    }
}