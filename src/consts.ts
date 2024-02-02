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
		title: "Gallery",
		href: "/gallery/portfolio/",
	},
	{
		title: "About",
		href: "/about/",
	},

];
// Links
type Link = {
	title: string;
	href: string;
	icon: string;
	children?: Link[];
	
};

export const LINKS: Link[] = [
	{
		title: "Instagram /Photo",
		href: "https://www.instagram.com/jelinski_official/",
		icon:"./assets/icons/instagram.svg",
	},
	{
		title: "Instagram /Art",
		href: "https://www.instagram.com/belialdesign/",
		icon:"./assets/icons/instagram.svg",
	},
	{
		title: "Youtube",
		href: "https://www.youtube.com/@BelialDesign/videos",
		icon:"",
	},
	{
		title: "Behance",
		href: "https://www.behance.net/michajeliski1",
		icon:"",
	},
	{
		title: "LinkedIn",
		href: "https://www.linkedin.com/in/michal-jelinski1/",
		icon:"",
	},
];

// Headlines
type Headlines = {
	id: number;
	heading: string;
	subtitle: string;
	children?: Headlines[];
};
export const Headlines: Headlines[] = [
	{
		id: 0,
		heading: "Portfolio",
		subtitle: "Projects",
	},
	{
		id: 1,
		heading: "Portfolio",
		subtitle: "Design",
	},
	{
		id: 2,
		heading: "Portfolio",
		subtitle: "Art",
	},
	{
		id: 3,
		heading: "Portfolio",
		subtitle: "3D",
	},
	{
		id: 4,
		heading: "Gallery",
		subtitle: "Portfolio",
	},
	{
		id: 5,
		heading: "Gallery",
		subtitle: "Portraits",
	},
	{
		id: 6,
		heading: "Gallery",
		subtitle: "Cars",
	},
	{
		id: 7,
		heading: "Gallery",
		subtitle: "Events",
	},
	{
		id: 8,
		heading: "Gallery",
		subtitle: "Other",
	},
	
];

//Subpages gallery
export const Subpage = [
	{
		title: "portfolio",
		href:"/gallery/portfolio/",
	},
	{
		title: "portraits",
		href:"/gallery/portraits/",
	},
	{
		title: "cars",
		href:"/gallery/cars/",
	},
	{
		title: "events",
		href:"/gallery/events/",
	},
	{
		title: "other",
		href:"/gallery/other/",
	},
];

// i18n
export const DEFAULT_LOCALE = "en";
export const LOCALES = {
	en: "en", // the `defaultLocale` value must present in `locales` keys
	pl: "pl",
};