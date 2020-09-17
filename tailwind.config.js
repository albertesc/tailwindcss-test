const _ = require("lodash");

const customColors = {
    primary: {
        100: '#84e0ff',
        200: '#70ccff',
        300: '#5cb8ff',
        400: '#48a4f0',
        500: '#3490DC',
        600: '#207cc8',
        700: '#0c68b4',
        800: '#0054a0',
        900: '#00408c'
    },
};

module.exports = {
    theme: {
        extend: {
            fontSize: {
                base: "15px",
            },
            fontFamily: {
                heading: ["Rubik", "sans-serif"],
                body: ["Rubik", "sans-serif"]
            },
            colors: {
                ...customColors
            },
            textColor: {
                ...customColors
            },
            backgroundColor: {
                ...customColors
            },
            cursor: {
                "col-resize": "col-resize"
            }
        },
        buttons: theme => ({
            primary: {
                backgroundColor: theme("colors.primary.500"),
                backgroundColorHover: theme("colors.primary.400"),
                textColor: "#FFFFFF",
                textColorHover: "#FFFFFF",
                padding: "0.75rem 2.5rem",
                borderRadius: ".25rem",
                lineHeight: "1.25",
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: theme("colors.primary.500"),
                borderColorHover: theme("colors.primary.400"),
            },
            ghost: {
                backgroundColor: "transparent",
                backgroundColorHover: theme("colors.primary.500"),
                textColor: theme("colors.primary.500"),
                textColorHover: "#FFFFFF",
                padding: "0.75rem 2.5rem",
                borderRadius: ".25rem",
                lineHeight: "1.25",
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: theme("colors.primary.500"),
                borderColorHover: theme("colors.primary.500"),
            },
            link: {
                backgroundColor: "transparent",
                backgroundColorHover: "transparent",
                textColor: theme("colors.primary.500"),
                textColorHover: theme("colors.primary.400"),
                padding: "0",
                borderRadius: "0",
                lineHeight: "1.25"
            }
        }),
        buttonSizes: {
            sm: {
                fontSize: "0.75rem",
                padding: "0.5rem 1rem"
            }
        },
        customForms: {
            default: {
                checkbox: {
                    "&:focus": {
                        boxShadow: "none",
                        borderColor: "none"
                    }
                },
                radio: {
                    "&:focus": {
                        boxShadow: "none",
                        borderColor: "none"
                    }
                }
            }
        },
    },
    variants: {
        scale: ['responsive', 'hover', 'group-hover'],
        opacity: ['responsive', 'hover', 'group-hover'],
        width: ['responsive', 'group-active'],
        height: ['responsive', 'group-active'],
        display: ['responsive', 'group-active'],
        backgroundColor: ['responsive', 'hover', 'focus', 'group-active'],
        scale: ['responsive', 'hover', 'focus', 'group-active'],
        translate: ['responsive', 'hover', 'focus', 'group-active'],
    },
    plugins: [
        require("@tailwindcss/ui"),
        require("@tailwindcss/custom-forms"),
        require("tailwindcss-buttons")({
            sizes: true
        }),
        require("./plugins/classHeaderFixed")(),
        require("./plugins/classActive")(),
    ],
    purge: [
        './public/**/*.html',
        './src/**/*.js'
    ],
};
