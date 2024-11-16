import tailwindcssAnimated from "tailwindcss-animated";
/** @type {import('tailwindcss').Config} */

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            sans: ["Montserrat", "sans-serif"],
        },
        extend: {
            cursor: {
                default: "url(assets/cursor.cur), default",
                pointer: "url(assets/cursor_pointer.cur), pointer",
            },
            dropShadow: {
                glow: [
                    "0 0px 2px rgba(255,255, 255, 0.6)",
                    "0 0px 2px rgba(255, 255,255, 0.4)",
                ],
            },
            colors: {
                dark: "#1A191A",
                white: "#FAFAFA",
                purple: "#5125AD",
            },
            animation: {
                spinCustom: 'spin 2s linear infinite'
            }
        },
    },
    plugins: [tailwindcssAnimated],
};
