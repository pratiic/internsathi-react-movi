/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            gridTemplateColumns: {
                list: "repeat(auto-fit, 15rem)",
            },
            scale: {
                103: "1.03",
            },
        },
    },
    plugins: [],
};
