/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          cyan: "hsl(180, 66%, 49%)",
          darkViolet: "hsl(257, 27%, 26%)",
        },
        secondary: {
          red: "hsl(0, 87%, 67%)",
        },
        neutral: {
          gray: "hsl(0, 0%, 75%)",
          grayishViolet: "hsl(257, 7%, 63%)",
          veryDarkBlue: "hsl(255, 11%, 22%)",
          veryDarkViolet: "hsl(260, 8%, 14%)",
        },
      },
      fontSize: {
        body: "18px",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
