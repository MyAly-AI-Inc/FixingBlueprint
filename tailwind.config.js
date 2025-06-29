/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
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
        // Custom colors for the "cream" theme
        "brand-cream": "#FAF8F1", // Light cream background
        "brand-teal-dark": "#3A5A5C", // Dark teal for hero and headings
        "brand-teal-hero-start": "#4A6B6D", // Gradient start for hero
        "brand-teal-hero-end": "#3A5A5C", // Gradient end for hero
        "brand-yellow-accent": "#F5B82E", // Yellow for primary buttons
        "brand-yellow-accent-hover": "#EAA91A", // Hover for yellow buttons
        "brand-text-dark": "#2D3748", // Dark gray for body text (like gray-800)
        "brand-text-heading": "#3A5A5C", // Same as dark teal for headings on cream
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        spotlight: {
          "0%": {
            opacity: 0,
            transform: "translate(-50%, -50%) scale(0.9)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%, -50%) scale(1)",
          },
        },
        // Add gradient animation keyframes
        "gradient-x": {
          "0%, 100%": {
            "background-position": "0% 50%",
          },
          "50%": {
            "background-position": "100% 50%",
          },
        },
        "gradient-y": {
          "0%, 100%": {
            "background-position": "50% 0%",
          },
          "50%": {
            "background-position": "50% 100%",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        spotlight: "spotlight 2s ease .75s 1 forwards",
        // Add gradient animations
        "gradient-x": "gradient-x 8s ease infinite",
        "gradient-y": "gradient-y 8s ease infinite",
        "gradient-x-fast": "gradient-x 4s ease infinite",
      },
      // Add fluid typography
      fontSize: {
        "fluid-xs": "clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)",
        "fluid-sm": "clamp(0.875rem, 0.8rem + 0.375vw, 1rem)",
        "fluid-base": "clamp(1rem, 0.9rem + 0.5vw, 1.125rem)",
        "fluid-lg": "clamp(1.125rem, 1rem + 0.625vw, 1.25rem)",
        "fluid-xl": "clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)",
        "fluid-2xl": "clamp(1.5rem, 1.3rem + 1vw, 1.875rem)",
        "fluid-3xl": "clamp(1.875rem, 1.6rem + 1.375vw, 2.25rem)",
        "fluid-4xl": "clamp(2.25rem, 1.9rem + 1.75vw, 3rem)",
        "fluid-5xl": "clamp(3rem, 2.5rem + 2.5vw, 4rem)",
      },
      // Add fluid spacing
      spacing: {
        "fluid-1": "clamp(0.25rem, 0.2rem + 0.25vw, 0.5rem)",
        "fluid-2": "clamp(0.5rem, 0.4rem + 0.5vw, 0.75rem)",
        "fluid-3": "clamp(0.75rem, 0.6rem + 0.75vw, 1rem)",
        "fluid-4": "clamp(1rem, 0.8rem + 1vw, 1.5rem)",
        "fluid-6": "clamp(1.5rem, 1.2rem + 1.5vw, 2.25rem)",
        "fluid-8": "clamp(2rem, 1.6rem + 2vw, 3rem)",
        "fluid-12": "clamp(3rem, 2.4rem + 3vw, 4.5rem)",
        "fluid-16": "clamp(4rem, 3.2rem + 4vw, 6rem)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
