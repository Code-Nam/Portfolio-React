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
                spinCustom: "spin 2s linear infinite",
                shine: "shine 2s linear infinite",
            },
            keyframes: {
                shine: {
                    from: {
                        backgroundPosition: "0 0",
                    },
                    to: {
                        backgroundPosition: "-200% 0",
                    },
                },
            },
            backgroundImage:{
                'gradient-primary': "linear-gradient(110deg,#000103,45%,#5125AD,55%,#000103)",
                'gradient-secondary': "linear-gradient(110deg,#000103,45%,#303030,55%,#000103)",
            }
        },
    },
    plugins: [tailwindcssAnimated],
};
