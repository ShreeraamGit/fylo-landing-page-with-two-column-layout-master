module.exports = {
    mode: 'jit',
    purge: ["../*.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                'body': ['Open Sans'],
                'heading': ['Raleway']
            }
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