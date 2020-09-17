module.exports = function () {
    return function ({ addVariant, e }) {
        addVariant('group-active', ({ modifySelectors, separator }) => {
            modifySelectors(({ className }) => {
                return `.active .${e(`group-active${separator}${className}`)}`
            })
        })
    }
}