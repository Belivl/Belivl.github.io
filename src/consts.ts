// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// Website metadata
export const SITE_URL: string = "https://belivl-vercel.vercel.app";
export const SITE_TITLE: string = "Belial Portfolio";
export const SITE_DESCRIPTION: string = "Welcome to my website!";

// SEO metadata
export const TWITTER_CREATOR: string = "@xxx";


// Misc
export const NAME1: string = "Belial";
export const NAME2: string = "Michal Jelinski";


// Navigation
type Page = {
	title: string;
	href: string;
	children?: Page[];
};

export const PAGES: Page[] = [
	{
		title: "Home",
		href: "/home/",
	},
	{
		title: "Portfolio",
		href: "/portfolio/",
	},
	{
		title: "About",
		href: "/about/",
	},
	{
		title: "Contact",
		href: "/contact/",
	},
];
// Links
type Link = {
	title: string;
	href: string;
	icon?: HTMLImageElement;
	children?: Link[];
	
};

export const LINKS: Link[] = [
	{
		title: "Instagram",
		href: "https://www.instagram.com/belialdesign/",
	},
	{
		title: "Youtube",
		href: "https://www.youtube.com/@BelialDesign/videos",
	},
	{
		title: "Behance",
		href: "https://www.behance.net/michajeliski1",
	},
];

// Headlines
type Headlines = {
	heading: string;
	subtitle: string;
	children?: Headlines[];
};
export const Headlines: Headlines[] = [
	{
		heading: "Portfolio",
		subtitle: "Projects",
	},
	{
		heading: "Portfolio",
		subtitle: "Design",
	},
	{
		heading: "Portfolio",
		subtitle: "Art",
	},
	{
		heading: "Portfolio",
		subtitle: "3D",
	},
	
];


// i18n
export const DEFAULT_LOCALE = "en";
export const LOCALES = {
	en: "en", // the `defaultLocale` value must present in `locales` keys
	pl: "pl",
};