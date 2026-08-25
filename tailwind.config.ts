import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],

  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],

  prefix: "",

  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },

    extend: {
      fontFamily: {
        display: [
          "Fraunces",
          '"Playfair Display"',
          "Georgia",
          "serif",
        ],
        sans: [
          "Inter",
          "Satoshi",
          "system-ui",
          "sans-serif",
        ],
      },

      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        body: "hsl(var(--body))",
        surface: "hsl(var(--surface))",

        gold: {
          DEFAULT: "hsl(var(--gold))",
          bright: "hsl(var(--gold-bright))",
        },

        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },

        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },

        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },

        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },

        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },

        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },

        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },

      /*
       * SmartPixel radius system
       *
       * Keep the interface to four intentional levels:
       *
       * sm  → compact controls
       * md  → standard controls / inputs
       * lg  → cards
       * full → pills / circular UI
       */
      borderRadius: {
        sm: "var(--radius-control)",
        md: "var(--radius-control)",
        lg: "var(--radius-card)",
        xl: "var(--radius-card)",
        "2xl": "var(--radius-card)",
        full: "var(--radius-pill)",
      },

      keyframes: {
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(24px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },

        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },

        "glow-pulse": {
          "0%, 100%": {
            opacity: "0.4",
          },
          "50%": {
            opacity: "0.7",
          },
        },
      },

      animation: {
        "fade-up":
          "fade-up 1s cubic-bezier(0.22, 1, 0.36, 1) both",

        "fade-in":
          "fade-in 1.2s ease-out both",

        "glow-pulse":
          "glow-pulse 6s ease-in-out infinite",
      },
    },
  },

  plugins: [require("tailwindcss-animate")],
} satisfies Config;