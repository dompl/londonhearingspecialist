module.exports = {
	theme: {
		production: "Kickstarter Child Theme",
		description: "Child theme for the Kickstarter/Red Frog Studio",
		name: "Kickstarter",
		url: "http://kickstarter.onfrog.co.uk",
		version: "1.0.0",
	},
	project: {
		name: "kickstarter", // this is the domain url you are working on.
		parent: "redfrogstudio", // The name od the paren theme. This will be kickstarter unless changed.
	},
	paths: {
		node_modules: "./node_modules/",
	},
	settings: {
		useGulpSassGraph: false,
	},
};
