/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
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
      colors: {
        light: "#F2F0EC",
				white: "#F2F2F1",
				grey:{
					'500': "#111114",
					'400': "#141417",
					'300': "#1C1C21",
					'200': "#434347",
					'150': "#5B5B61",
					'100': "#7B7B7E",
					'75': "#A2A2A4",
					'60': "#C8C8C8",
					'50': "#E8E8E9",
				},
        goldTips: {
					'50': 'hsl(57, 75%, 95%)',
					'100': 'hsl(55, 84%, 88%)',
					'200': 'hsl(52, 85%, 77%)',
					'300': 'hsl(50, 84%, 64%)',
					'400': 'hsl(48, 82%, 53%)',
					'500': 'hsl(45, 80%, 48%)',
					'600': 'hsl(40, 83%, 40%)',
					'700': 'hsl(35, 79%, 33%)',
					'800': 'hsl(31, 70%, 29%)',
					'900': 'hsl(27, 62%, 26%)',
					'950': 'hsl(27, 72%, 14%)',
				},
				goldTips2: {
					'50': '#fcfbea',
					'100': '#faf6c7',
					'200': '#f6e992',
					'300': '#f0d654',
					'400': '#eac125',
					'500': '#dcab18',
					'600': '#bc8412',
					'700': '#965f12',
					'800': '#7d4c16',
					'900': '#6a3e19',
					'950': '#3e210a',
				},
        wood: {
					'red': '#FF3C3C',
					'green': '#23BE1C',
					'white': '#FDF7F2',
					'light': '#F3D8BF',
					'cream': '#E9BE95',
					'brown': '#BB8E65',
					'dark': '#602626',
				},
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
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  overrides: [
		{
			files: "*.astro",
			options: {
				parser: "astro",
			},
		},
	],
  plugins: [require("tailwindcss-animate")],
  'tailwindcss/nesting': {},
}