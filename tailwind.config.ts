import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

export default {
  content: [
    "src/**/*.tsx"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Cairo', 'Century Gothic','sans-serif']
      }
    },
  },
  plugins: [
    plugin(({ addVariant, addComponents }) => {
      addVariant('not-last', '&:not(:last-child)')
      const componentLib = {
        ".btn": {
          padding: ".5rem 1rem",
          borderRadius: ".25rem",
          fontWeight: "600",
          cursor: "pointer",
          transition: "all .3s",
          "&:hover": {
            opacity: ".8"
          }
        },
        ".btn-blue": {
          color: "#fff",
          backgroundColor: "#3b82f6",
          "&:hover": {
            backgroundColor: "#2563eb"
          }
        },
        ".btn-red": {
          color: "#fff",
          backgroundColor: "#ef4444",
          "&:hover": {
            backgroundColor: "#dc2626"
          }
        }
      }
      addComponents(componentLib)
    })
  ],
} satisfies Config

