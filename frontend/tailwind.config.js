module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "#0D020A",
        softPink: "#E4D7E1",
        lavender: "#B691AC",
        magenta: "#A61380",
        rose: "#BA81AB",
        deepDark: "#050104",
        richPink: "#B477A5",
        highlight: "#F28BD7",
      },

       keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "fade-in-delayed": "fadeIn 0.8s ease-out 0.3s forwards",
        "slide-up": "slideUp 1s ease-out 0.5s forwards",
      },
  
      plugins: [require("tailwind-scrollbar-hide")],
      backgroundImage: {
        gradientCustom:
          "linear-gradient(to bottom right, #8A4C7A, #030203, #B691AC, #D3AFCA, #F28BD7, #FDFCFD)",
      },
    },
  },
};
