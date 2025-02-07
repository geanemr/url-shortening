/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          cyan: "hsl(180, 66%, 49%)",
          darkViolet: "hsl(257, 27%, 26%)",
          darkCyan: "hsl(180, 66%, 45%)",
        },
        secondary: {
          red: "hsl(0, 87%, 67%)",
        },
        neutral: {
          gray: "hsl(0, 0%, 75%)",
          grayishViolet: "hsl(257, 7%, 63%)",
          veryDarkBlue: "hsl(255, 11%, 22%)",
          veryDarkViolet: "hsl(260, 8%, 14%)",
          aquamarine: "hsl(160, 100%, 75%)"
        },
      },
      fontSize: {
        body: "18px",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "inputMobile": "url('/bg-shorten-mobile.svg')",
        "inputDesktop": "url('/bg-shorten-desktop.svg')",
        "boostMobile":  "url('/bg-boost-mobile.svg')",
        "boostDesktop": "url('/bg-boost-desktop.svg')",
      },
      screens: {
        'lg-desktop': '1500px',
      },
    },
  },
  plugins: [],
};
