/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            gridTemplateColumns: {
                list: "repeat(auto-fit, 15rem)",
                "list-smaller": "repeat(auto-fit, 14rem)",
                "list-smallest": "repeat(2, 1fr)",
            },
            scale: {
                103: "1.03",
            },
            backgroundImage: {
                home: "url('/images/theatre.jpg')",
            },
            screens: {
                1000: "1000px",
                850: "850px",
                750: "750px",
                550: "550px",
                500: "500px",
                450: "450px",
            },
        },
    },
    plugins: [],
};
