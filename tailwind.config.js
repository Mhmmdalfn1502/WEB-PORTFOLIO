export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: "#ffffff", // Warna custom
          secondary: "#2196f3",
        },
        fontFamily: {
          custom: ["Poppins", "sans-serif"], // Font custom
        },
        spacing: {
          "128": "32rem", // Menambah ukuran spacing
        },
      },
    },
    plugins: [],
  };
  