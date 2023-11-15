module.exports = {
	theme: {
		production: "London Hearing Specialist",
		description: "Child theme for the Kickstarter/Red Frog Studio",
		name: "londonhearingspecialist",
		url: "https://londonhearingspecialist.co.uk",
		version: "1.0.0",
	},
	project: {
		name: "londonhearingspecialist", // this is the domain url you are working on.
		parent: "redfrogstudio", // The name od the paren theme. This will be kickstarter unless changed.
	},
	paths: {
		node_modules: "./node_modules/",
	},
	settings: {
		useGulpSassGraph: false,
	},
};
