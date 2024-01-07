/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
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
				/** Change here the font family */
				sans: ["Inter Variable", "Inter", ...defaultTheme.fontFamily.sans],
			},
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
				/** Override here your primary colors */
				primary: {
					50: "#fef1f7",
					100: "#fee5f0",
					200: "#fecce3",
					300: "#ffa2cb",
					400: "#fe68a7",
					500: "#f83c86",
					600: "#e91f64",
					700: "#ca0c47",
					800: "#a70d3b",
					900: "#8b1034",
					950: "#55021a",
				},
				secondary: {
					50: "#f4f7f7",
					100: "#e2ebeb",
					200: "#c8d9d8",
					300: "#a1bfbf",
					400: "#739c9d",
					500: "#588182",
					600: "#4c6c6e",
					700: "#425a5c",
					800: "#3b4d4f",
					900: "#354244",
					950: "#222d2f",
				},
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
	darkMode: "class",
};