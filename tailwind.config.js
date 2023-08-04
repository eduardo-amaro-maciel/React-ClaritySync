/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         fontFamily: {
            mono: "Inter",
            sans: "Roboto",
         },
         colors: {
            "cor-preto": "#333333",
            "cor-verde": "#a2a55e",
            "cor-branco": "#FFFEFE",
            "cor-laranja": "#ff6400",
            "cor-amarelo": "#efad1a",
         },
      },
   },
   plugins: [],
};
