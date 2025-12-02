/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#0a0f1c", // Deep Blue
                secondary: "#000000", // Black
                accent: {
                    cyan: "#00f3ff", // Electric Cyan
                    violet: "#9d00ff", // Violet
                },
                text: {
                    main: "#ffffff",
                    muted: "#a0a0a0",
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                heading: ['Outfit', 'sans-serif'],
            },
            animation: {
                'spin-slow': 'spin 10s linear infinite',
                'pulse-glow': 'pulse-glow 2s infinite',
            },
            keyframes: {
                'pulse-glow': {
                    '0%, 100%': { opacity: 1, boxShadow: '0 0 10px #00f3ff' },
                    '50%': { opacity: 0.5, boxShadow: '0 0 20px #00f3ff' },
                }
            }
        },
    },
    plugins: [],
}
