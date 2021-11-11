module.exports = {
    mode: 'jit',
    purge: ["../*.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                'body': "'Open Sans', sans - serif",
                'heading': "'Raleway', sans - serif"
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}