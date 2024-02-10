/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    // colors: {
      // 'login': {
      //   100: "#55418b",
      // },
      // 'overlay': {
      //   100: "#55418b",
      // },
      // 'white': {
      //   100: "#fff",
      // },
    // },
  },
  plugins: [],
};
// module.exports = {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       backgroundImage: {
//         "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
//         "gradient-conic":
//           "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
//       },
//       colors: {
//         // Define your custom colors here without overriding existing ones
//         login: {
//           100: "#55418b",
//         },
//         overlay: {
//           100: "#55418b",
//         },
//         // You can extend or override existing colors if needed
//         white: {
//           // Extend white with custom shades
//           100: "#fff",
//           // You can add more shades as needed
//         },
//       },
//     },
//   },
//   plugins: [],
// };