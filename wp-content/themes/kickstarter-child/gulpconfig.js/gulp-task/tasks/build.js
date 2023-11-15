// Import required modules and tasks
const gulp = require("gulp");
const clean = require("./clean");
const { sassCompileStyle, sassCompileBuild, sassCompileTinyMCE, sassCompileAdmin } = require("./sass");
const { PhpCompile, PhpVendor } = require("./php");
const { jsCompile, adminJsCompile, TinyMceJsCompile, modernizrBuild, deleteModernizr } = require("./js.js");
const icons = require("./icons");
const googlefonts = require("./googlefonts");
const images = require("./images");
const { updateGulpTasks } = require("./update.js");
const { injectStyleScss, injectBuildScss } = require("./inject");

/**
 * Gulp task to orchestrate the build process.
 * This task aggregates various sub-tasks to compile, process, and prepare all assets and files for the build.
 * It ensures tasks are executed in the specified order to meet dependencies and prerequisites among tasks.
 */
gulp.task(
	"build",
	gulp.series(
		// Uncomment below line to Update Gulp tasks from the submodule
		// updateGulpTasks,

		// Clean the build directory to ensure a fresh build
		clean,

		// Download Google Fonts as specified in the configuration
		googlefonts.downloadGoogleFonts,

		// Compile main styles using SASS compiler
		sassCompileStyle,

		// Compile additional build-specific styles using SASS compiler
		sassCompileBuild,

		// Compile additional TinyMc styles using SASS compiler
		sassCompileTinyMCE,

		// Compile additional Admin styles using SASS compiler
		sassCompileAdmin,

		// Compile PHP files and move them to the build directory
		PhpCompile,

		// Process PHP vendor files and prepare them for the build
		PhpVendor,

		// Delete existing modernizr file to ensure a fresh build
		deleteModernizr,

		// Apply modernizr to JavaScript files for custom feature detection
		modernizrBuild,

		// Compile main JavaScript files and bundle them for the build
		jsCompile,

		// Compile admin-specific JavaScript files and bundle them for the build
		adminJsCompile,

		// Compile tinymce-specific JavaScript files and bundle them for the build
		TinyMceJsCompile,

		// Wipe existing icon fonts to ensure a fresh build
		icons.iconfont_wipe,

		// Generate new icon fonts based on the configuration
		icons.iconfont,

		// Copy images to the build directory and optimize them if necessary
		images.copyImages,

		// Move downloaded Google Fonts to the build directory
		googlefonts.moveFontsToBuild
	)
);
