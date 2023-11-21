module.exports = {
	theme: {
		production: "London Hearing Specialist",
		description: "Child theme for the Kickstarter/Red Frog Studio",
		name: "London Hearing Specialist",
		url: "http://londonhearingspecialist.co.uk",
		version: "1.0.0",
	},
	project: {
		name: "londonhearingspecialist", // this is the domain url you are working on.
		parent: "redfrogstudio", // The name od the paren theme. This will be kickstarter unless changed.
	},
	paths: {
		node_modules: "./node_modules/",
	},
	modernizr: {
		options: ["setClasses", "addTest", "html5printshiv", "testProp", "fnBind"],
		tests: ["webworkers", ["cssgrid", "cssgridlegacy"]],
	},
	paths: {
		node_modules: "./node_modules/",
	},
	settings: {
		useGulpSassGraph: false,
	},
	autoprefixer: {
		// Browsers List
		// You can specify which browsers you want to target. This is typically done in a .browserslistrc file or directly in package.json under "browserslist" key. You can also specify this inline like so:
		overrideBrowserslist: ["last 2 versions", "> 1%"],

		// Remove Unnecessary Prefixes
		// You can remove outdated prefixes based on your browsers list:
		remove: true,

		// Add Grid Support for IE
		// If you are using CSS Grid and need to support IE, you can tell Autoprefixer to add IE-specific grid layout syntax:
		grid: "autoplace",

		// Cascade
		// Controls the visual beauty of prefixing in the output file. If true, it tries to maintain line breaks and indentation based on the input:
		cascade: false,
	},
};
