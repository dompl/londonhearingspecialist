/* ********************************************************
 *   Gulp Icons
 * ********************************************************
 */

// Import required modules
const gulp = require("gulp");
const clean = require("gulp-clean");
const iconfontPlugin = require("gulp-iconfont"); // Renamed to iconfontPlugin for clarity
const iconfontCss = require("gulp-iconfont-css");
const config = require(process.cwd() + "/gulpconfig.js");

// Function to generate icon fonts
function iconfont() {
	return gulp
		.src("./src/assets/icons/**/*.svg", { base: "./" }) // Source SVG files
		.pipe(
			iconfontCss({
				fontName: `${config.project.name}-font`, // Font name based on project name
				targetPath: "../../../src/assets/scss/styles/_icons.scss", // SCSS target path
				path: "./src/assets/scss/abstracts/_icons_template.scss", // Template path
				fontPath: "assets/fonts/", // Font path in SCSS
			})
		)
		.pipe(
			iconfontPlugin({
				fontName: `${config.project.name}-font`, // Font name based on project name
				formats: ["ttf", "eot", "woff", "woff2", "svg"], // Font formats
				timestamp: Math.round(Date.now() / 1000), // Timestamp for cache busting
				normalize: true, // Normalize icons dimensions
				fontHeight: 1001, // Font height
				unicode: true, // Unicode support
			})
		)
		.pipe(gulp.dest("./build/assets/fonts")); // Destination directory
}

// Function to clean the fonts directory
function iconfont_wipe() {
	return gulp.src("./build/assets/fonts/*", { read: false }).pipe(clean());
}

// Export the functions
exports.iconfont = iconfont;
exports.iconfont_wipe = iconfont_wipe;
