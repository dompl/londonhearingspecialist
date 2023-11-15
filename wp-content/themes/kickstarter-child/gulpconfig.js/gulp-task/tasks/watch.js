// Import required modules and configurations
const gulp = require("gulp");
const { browserSync, BrowserSyncConfig } = require("./browsersync");
const config = require(process.cwd() + "/gulpconfig.js");
const { sassCompileStyle, sassCompileBuild, sassCompileTinyMCE, sassCompileAdmin } = require("./sass");
const { iconfont: icons } = require("./icons");
const PhpTasks = require("./php");
const { copyImages } = require("./images");
const { updateGulpTasks } = require("./update.js");
const { jsCompile, adminJsCompile, TinyMceJsCompile, modernizrBuild } = require("./js.js");
const { injectStyleScss, injectBuildScss } = require("./inject");

// Define the folder containing assets for ease of reference
const assetsFolder = "./src/assets";

/**
 * Watch function to monitor changes in various files and execute corresponding tasks.
 * This function initializes BrowserSync for live reloading and sets up watchers for
 * SCSS, JavaScript, images, icons, and PHP files. When a change is detected in any
 * of these file types, the corresponding compile or copy task is executed.
 */
function watch() {
	// Initialize BrowserSync with predefined configuration
	browserSync.init(BrowserSyncConfig);

	// Watch for changes in SCSS files located in styles, builds, and tinymces folders
	// and compile them using their respective tasks
	gulp.watch(`${assetsFolder}/scss/styles/**/*.scss`, gulp.series(sassCompileStyle));
	gulp.watch(`${assetsFolder}/scss/builds/**/*.scss`, gulp.series(sassCompileBuild));
	gulp.watch(`${assetsFolder}/scss/tinymces/**/*.scss`, gulp.series(sassCompileTinyMCE));
	gulp.watch(`${assetsFolder}/scss/admins/**/*.scss`, gulp.series(sassCompileAdmin));

	// Watch for changes in JavaScript files and compile them using their respective tasks
	gulp.watch(`${assetsFolder}/js/**/*.js`, gulp.series(jsCompile));
	gulp.watch(`${assetsFolder}/js/**/*.js`, gulp.series(adminJsCompile));
	gulp.watch(`${assetsFolder}/js/**/*.js`, gulp.series(TinyMceJsCompile));

	// Watch for changes in image files of specific formats and execute the copyImages task
	gulp.watch(`${assetsFolder}/assets/images/**/*.+(jpg|jpeg|png|gif|svg|webp|ico)`, gulp.series(copyImages));

	// Watch for changes in SVG icon files and generate icon fonts
	gulp.watch(`${assetsFolder}/icons/*.svg`, gulp.series(icons));

	// Watch for changes in PHP files located in Classes, functions, and components folders
	// and compile them using their respective tasks
	gulp.watch(["./src/Classes/**/*.php"], gulp.series(PhpTasks.PhpWatch.Classes));
	gulp.watch(["./src/functions/**/*.php"], gulp.series(PhpTasks.PhpWatch.Functions));
	gulp.watch(["./src/components/**/*.php"], gulp.series(PhpTasks.PhpWatch.Components));
}

// Export the watch function to make it available for other modules
module.exports = watch;

// Define a Gulp task named 'watch' that executes the watch function.
// This allows you to run 'gulp watch' from the command line to start the watcher.
gulp.task("watch", gulp.series(watch));
