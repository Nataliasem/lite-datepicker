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
            base: 'var(--color-text-base)',
            inverted: 'var(--color-text-inverted)'
          }
        },
        backgroundColor: {
          skin: {
            fill: 'var(--color-fill)',
            'fill-container': 'var(--color-fill-container)',
            'fill-inverted': 'var(--color-fill-inverted)',
            'button-main': 'var(--color-button-main)',
            'button-main-hover': 'var(--color-button-main-hover)',
            'button-main-active': 'var(--color-button-main-active)'
          }
        },
        borderColor: {
          skin: {
            'input-border': 'var(--color-input-border)'
          }
        }
      }
    },
  plugins: [],
}