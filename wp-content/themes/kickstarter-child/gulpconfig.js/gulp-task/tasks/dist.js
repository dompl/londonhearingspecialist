// Import required modules
require("./build.js");
const gulp = require("gulp");
const clean = require("gulp-clean");
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");
const sass = require("gulp-sass");
const csso = require("gulp-csso");
const concat = require("gulp-concat");
const phpMinify = require("gulp-php-minify");
const config = require(process.cwd() + "/gulpconfig.js");
const { updateGulpTasks } = require("./update.js");
const exec = require("child_process").exec;
const replace = require("gulp-replace");
const insert = require("gulp-insert");
const download = require("gulp-download-stream");
const path = require("path");
const fs = require("fs");

// Configuration
const dist = config.project.parent + "-child";

// Function to increment version number, commit, tag and push
function incrementVersion(done) {
	// Read the existing config file
	const configPath = path.join(process.cwd(), "gulpconfig.js");
	const configData = require(configPath);

	// Increment the version
	const versionParts = configData.theme.version.split(".");
	const patchVersion = parseInt(versionParts[2], 10) + 1;
	versionParts[2] = patchVersion.toString();
	const newVersion = versionParts.join(".");

	// Update the version in the config object
	configData.theme.version = newVersion;

	// Write the updated config back to the file
	const updatedConfig = `module.exports = ${JSON.stringify(configData, null, 2)};`;
	fs.writeFileSync(configPath, updatedConfig);

	// Update the in-memory config
	config.theme.version = newVersion;

	// Display the version increment message in yellow
	console.log(); // Empty line
	console.log(`\x1b[33m${config.theme.name} Theme Version incremented to ${newVersion}\x1b[0m`);
	console.log(); // Empty line
	// Commit the change, create a tag and push to GitHub
	exec(`git add gulpconfig.js && git commit -m "Increment theme version in gulpconfig.js to ${newVersion}" && git tag v${newVersion} && git push origin master && git push origin v${newVersion}`, function (err, stdout, stderr) {
		if (err) {
			// Display the error message in green
			console.log(); // Empty line
			console.error(`\x1b[32mGit operations failed: ${stderr}\x1b[0m`);
			console.log(); // Empty line
		} else {
			// Display the success message in red
			console.log(); // Empty line
			console.log(`\x1b[32mGit operations successful: ${stdout.trim()}\x1b[0m`);
			console.log(); // Empty line
		}
		done(); // Signal async completion
	});
}

// Add this to your series of tasks in gulp.task("dist", ...)
gulp.task("dist", gulp.series(CleanDist, "build", CopyFromBuild, DistributionJS, DistributionSCSS, CleanupFiles, GetThemeImage, ReplaceInStyleCSS, incrementVersion, ActivateTheme));

// Clean distribution folder
function CleanDist() {
	return gulp.src("../" + dist, { read: false, allowEmpty: true }).pipe(clean({ force: true }));
}

// Copy files from build folder to distribution folder
function CopyFromBuild() {
	return gulp.src(["./build/**/*"]).pipe(gulp.dest("../" + dist));
}

// Minify PHP files
function DistributionPHP() {
	return gulp
		.src(["./build/**/*.php", "!./build/vendor/**/*"])
		.pipe(phpMinify())
		.pipe(gulp.dest("../" + dist));
}

// Minify JavaScript files
function DistributionJS() {
	return gulp
		.src("./build/assets/js/*.js")
		.pipe(uglify())
		.pipe(gulp.dest("../" + dist + "/assets/js"));
}

// Compile and minify SCSS files
function DistributionSCSS() {
	return gulp
		.src("./build/**/*.css")
		.pipe(concat("style.css"))
		.pipe(csso({ comments: false }))
		.pipe(gulp.dest("../" + dist));
}

// Cleanup unnecessary files
function CleanupFiles() {
	return gulp.src(["../" + dist + "/**/*.map", "../" + dist + "/build.css"], { read: false }).pipe(clean({ force: true }));
}

// Copy composer.json file
function CopyComposerFile() {
	return gulp.src("./src/composer.json").pipe(gulp.dest("../" + dist));
}

// Run composer dump-autoload
function DumpAutoload() {
	return exec("composer dump-autoload -o", { cwd: `../${dist}` }, function (err, stdout, stderr) {
		console.log(`\x1b[31m${err ? `composer dump-autoload failed: ${stderr}` : `composer dump-autoload completed: ${stdout}`}\x1b[0m`);
	});
}

// Replace and prepend metadata in style.css
function ReplaceInStyleCSS() {
	const prependText = `/*!
Theme Name: ${config.theme.name}
Theme URI: http://www.redfrogstuio.co.uk/kickstarter-child/
Description: ${config.theme.description}
Author: Dom Kapelewski
Author URI: https://github.com/dompl
Template: ${config.project.parent}
Version: ${config.theme.version}
License: GNU General Public License v2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html
Text Domain: ${config.theme.production}
  */\n`;

	return gulp
		.src("../" + dist + "/style.css")
		.pipe(insert.prepend(prependText))
		.pipe(gulp.dest("../" + dist));
}

// Download theme image
function GetThemeImage() {
	return download("https://ks-projects.s3-eu-west-2.amazonaws.com/redfrogstudio/screenshot.png").pipe(gulp.dest("../" + dist));
}

// Activate WordPress theme
function ActivateTheme() {
	return exec(`wp theme activate ${config.project.parent} > /dev/null 2>&1; wp theme activate ${dist} > /dev/null 2>&1`, function (err, stdout, stderr) {
		if (err) {
			// Display the error message in green and trim any whitespace
			console.log(`\x1b[31m${err ? `exec error: ${err}` : stdout}\x1b[0m`);
		} else {
			// Display the success message in green and trim any whitespace
			console.log(`\x1b[32mThe production theme is now active.\x1b[0m`);
		}
	});
}

// Export tasks
exports.CopyFromBuild = CopyFromBuild;
exports.DistributionJS = DistributionJS;
exports.DistributionSCSS = DistributionSCSS;
exports.CopyComposerFile = CopyComposerFile;
exports.ActivateTheme = ActivateTheme;
exports.DumpAutoload = DumpAutoload;
exports.CleanupFiles = CleanupFiles;
exports.CleanDist = CleanDist;
exports.GetThemeImage = GetThemeImage;
exports.ReplaceInStyleCSS = ReplaceInStyleCSS;

// Define main distribution task
gulp.task("dist", gulp.series(updateGulpTasks, CleanDist, "build", CopyFromBuild, DistributionJS, DistributionSCSS, CleanupFiles, GetThemeImage, ReplaceInStyleCSS, incrementVersion, ActivateTheme));
