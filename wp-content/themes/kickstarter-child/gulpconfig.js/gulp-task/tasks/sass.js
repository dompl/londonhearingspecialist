// Import required modules
const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("gulp-autoprefixer");
const sourcemaps = require("gulp-sourcemaps");
const config = require(process.cwd() + "/gulpconfig.js");
const browsersync = require("browser-sync");
const sassGlobImporter = require("sass-glob-importer");
const path = require("path");
const fs = require("fs");
const scssDir = "./src/assets/scss";
/**
 * Compiles SASS files into CSS, with optional features like source maps, autoprefixing, etc.
 * @param {Array<string>} src - An array of glob patterns for source SASS files.
 * @param {string} dest - The directory where the compiled CSS files should be saved.
 * @returns {Stream} - Returns a Gulp stream so the function can be used in a Gulp task.
 */
function sassCompile(src, dest) {
	// Initialize a Gulp pipeline with source SASS files and source maps
	let pipeline = gulp.src(src).pipe(sourcemaps.init());

	// Use gulp-sass-graph for SASS dependency tracking, if enabled in config
	if (config.settings && config.settings.useGulpSassGraph) {
		const sassGraph = require("gulp-sass-graph");
		pipeline = pipeline.pipe(sassGraph(src));
	}

	// Continue the Gulp pipeline with SASS compilation, autoprefixing, and source map writing
	return pipeline
		.pipe(
			sass({
				importer: sassGlobImporter(),
				includePaths: ["node_modules", "node_modules/breakpoint-slicer", path.resolve(__dirname, "../../src/assets/scss")],
				compiler: "libsass",
				precision: 10,
				sourceComments: true,
				outputStyle: "expanded",
				onError: (err) => console.log(err),
			})
		)
		.pipe(autoprefixer(config.autoprefixer ? config.autoprefixer : { overrideBrowserslist: ["last 2 versions", "> 1%"] }))
		.pipe(sourcemaps.write("./"))
		.pipe(gulp.dest(dest))
		.pipe(browsersync.stream());
}

// Configuration for different SASS compilation tasks
const sassConfigs = [
	{ name: "sassCompileStyle", mainFile: `${scssDir}/style.scss`, src: [`${scssDir}/styles/**/*.scss`] },
	{ name: "sassCompileBuild", mainFile: `${scssDir}/build.scss`, src: [`${scssDir}/builds/**/*.scss`] },
	{ name: "sassCompileTinyMCE", mainFile: `${scssDir}/tinymce.scss`, src: [`${scssDir}/tinymces/**/*.scss`] },
	{ name: "sassCompileAdmin", mainFile: `${scssDir}/admin.scss`, src: [`${scssDir}/admins/**/*.scss`] },
];

const taskExports = {};

// Generate Gulp tasks for each SASS compilation configuration
sassConfigs.forEach((config) => {
	taskExports[config.name] = function compileSassTask(done) {
		// Check if the main SASS file exists; if not, skip this task
		if (!fs.existsSync(config.mainFile)) {
			const fileName = path.basename(config.mainFile);
			console.log(); // Empty line for readability
			console.log("\x1b[33m%s\x1b[0m", `SCSS file does not exist at ${fileName}. Skipping this task.`); // Output in yellow
			console.log(); // Another empty line for readability
			return done(); // Signal Gulp that this asynchronous task is complete
		}
		return sassCompile([...config.src, config.mainFile], "./build");
	};
});

// An array to store dynamically created task names
const dynamicTaskNames = [];

// Generate Gulp tasks for each SASS compilation configuration
sassConfigs.forEach((config, index) => {
	const taskName = `${config.name}-${index}`; // Create a unique task name
	dynamicTaskNames.push(taskName); // Add this task name to the array
	gulp.task(taskName, function compileSassTask(done) {
		// Check if the main SASS file exists; if not, skip this task
		if (!fs.existsSync(config.mainFile)) {
			const fileName = path.basename(config.mainFile);
			console.log(); // Empty line for readability
			console.log("\x1b[33m%s\x1b[0m", `SCSS file does not exist at ${fileName}. Skipping this task.`); // Output in yellow
			console.log(); // Another empty line for readability
			return done(); // Signal Gulp that this asynchronous task is complete
		}
		return sassCompile([...config.src, config.mainFile], "./build");
	});
});

// Generalized task that runs all dynamically generated tasks in series
gulp.task("sass", gulp.series(...dynamicTaskNames));

module.exports = taskExports;
