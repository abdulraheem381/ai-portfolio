/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: "rgb(var(--color-primary) / <alpha-value>)", // Deep Blue / White
                secondary: "rgb(var(--color-secondary) / <alpha-value>)", // Black / Slate-50
                accent: {
                    cyan: "rgb(var(--color-accent-cyan) / <alpha-value>)", // Electric Cyan
                    violet: "rgb(var(--color-accent-violet) / <alpha-value>)", // Violet
                },
                text: {
                    main: "rgb(var(--color-text-main) / <alpha-value>)",
                    muted: "rgb(var(--color-text-muted) / <alpha-value>)",
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
