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
            backgroundImage: {
                'curve-pattern': "url('/images/wave.svg')",
            },
            textColor: {
                'primary': '#3490dc',
                'secondary': '#ffed4a',
                'working-button': 'hsl(170, 45%, 43%)'
            },
            borderRadius: {
                'none': '0',
                'sm': '0.125rem',
                DEFAULT: '0.25rem',
                DEFAULT: '4px',
                'md': '0.375rem',
                'lg': '0.5rem',
                'full': '9999px',
                'custom': '100px',
            },
            backgroundColor: theme => ({
                ...theme('colors'),
                'button-bg': 'hsl(224, 93%, 58%)',
                'button-hover-bg': 'hsl(170, 45%, 43%)',
                'desaturated-blue': 'hsl(238, 22%, 44%)',
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