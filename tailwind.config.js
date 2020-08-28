module.exports = {
    purge:{
        enabled: process.env.NODE_ENV === 'production',
        content: ['./src/**/*.js', './src/**/*.tsx'],
    },
    theme: {
        extend: {},
    },
    // // variants: {
    // //     backgroundColor: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    // //     textColor: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    // // },
    // variants: ['responsive', 'group-hover', 'group-focus', 'focus-within', 'first', 'last', 'odd', 'even', 'hover', 'focus', 'active', 'visited', 'disabled'],
    plugins: [],
};