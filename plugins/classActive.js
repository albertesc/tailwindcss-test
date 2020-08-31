module.exports = function () {
    return function ({ addVariant, e }) {
        addVariant('active', ({ modifySelectors, separator }) => {
            modifySelectors(({ className }) => {
                return `.active.${e(`active${separator}${className}`)}`
            })
        })
    }
}