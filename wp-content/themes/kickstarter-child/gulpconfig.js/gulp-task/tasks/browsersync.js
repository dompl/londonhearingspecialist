// Import required modules
const browserSync = require("browser-sync").create();
const config = require(process.cwd() + "/gulpconfig.js");
const hostname = require("os").hostname().toLowerCase();

// Initialize default BrowserSync configuration
const BrowserSyncConfig = {
	files: [
		"./build/**",
		"!./build/vendor/**/*",
		"!./build/**/*.map",
		"!./build/custom.css",
		"!./build/**/*is-custom*.css", // Exclude all 'is-custom' CSS files
		"!./src/vendor/**/*",
	], // Files to watch for changes
	https: false, // Use HTTP, not HTTPS
	notify: false, // Don't display any notifications in the browser
	open: false, // Don't automatically open the browser
	ghostMode: true, // Mirror clicks, scrolls, and form inputs across all connected devices
	port: 3000, // Default port
	proxy: "", // Proxy will be set based on hostname
};

// Initialize domain variable
let domain = "";

// Check if the detected hostname contains "silly-wilson"
if (hostname.indexOf("silly-wilson") !== -1) {
	// Set domain and port for silly-wilson
	domain = `${config.project.name}.onfrog.co.uk`;
	BrowserSyncConfig.port = 8915;
} else {
	// Set domain and port for other cases
	domain = `${config.project.name}.test`;
	BrowserSyncConfig.port = 3000;
}

// Set proxy for BrowserSync to the domain
BrowserSyncConfig.proxy = domain;

// Export the configured BrowserSync instance and the configuration object
module.exports = {
	BrowserSyncConfig,
	browserSync,
};
