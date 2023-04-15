/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './app/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            maxHeight: {
                '1/2': '55vh',
            },
            minHeight: {
                '1/2-vh': '50vh',
                16: '64px',
                18: '68px',
            },
            width: {
                18: '68px',
            },
            borderWidth: {
                1: '1px',
                6: '6px',
            },
            colors: {
                black: '#1A1A1A',
                green: '#5CBD76',
                gray: '#B0B0B0',
                'dark-gray': '#7A7A7A',
                card: '#FFFBFE',
                link: '#003366',
                inactive: '#D9D9D9',
                active: '#A3A3A3',
            },
        },
    },
    plugins: [],
}
