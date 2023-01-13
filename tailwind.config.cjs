/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
    theme: {
      extend: {
        textColor: {
          skin: {
            base: '--color-text-base'
          }
        },
        backgroundColor: {
          skin: {
            fill: '--color-fill'
          }
        }
      }
    },
  plugins: [],
}