module.exports = {
    mode: 'jit',
    purge: ["../*.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                'body': ['Open Sans'],
                'heading': ['Raleway']
            },
            backgroundColor: theme => ({
                ...theme('colors'),
                'button-bg': 'hsl(224, 93%, 58%)',
                'button-hover-bg': 'hsl(170, 45%, 43%)'

            })
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/forms')({
            strategy: 'class',
        }),
    ],
}