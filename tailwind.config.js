/** @type {import('tailwindcss').Config} */

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            sans: ["Montserrat", "sans-serif"],
        },
        colors: {
            dark: "#1A191A",
            white: "#FAFAFA",
            purple: "#5125AD"
        },
    },
    plugins: [],
};
