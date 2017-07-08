// this task build and compresses all html, css, js file into docs folder.
//whenever you make changes in source code make make sure to run gulp build in CMD.
var gulp = require('gulp'),
imagemin = require('gulp-imagemin'),
del = require('del'),
usemin = require("gulp-usemin"),
rev = require("gulp-rev"),
cssnano = require('gulp-cssnano'),
uglify = require('gulp-uglify'),
browserSync = require('browser-sync').create();

//if you want to see finel product run gulp previewDist in CMD. 
gulp.task('previewDist', function() {
	browserSync.init({
		server: {
			baseDir: 'docs'
		}
	});
});

//Delete the docs folder before creating it again.
gulp.task('deleteDistFolder', ['icons'], function() {
	return del("./docs");
});

//For feature use if you add new file into app folder code will add the file in to docs.
gulp.task('copyGeneralFiles', ['deleteDistFolder'], function(){
	var pathsToCopy = [
		'./app/**/*',
		'!./app/index.html',
		'!./app/assets/images/**',
		'!./app/assets/styles/**',
		'!./app/assets/scripts/**',
		'!./app/temp',
		'!./app/temp/**'
		];
	return gulp.src(pathsToCopy)
	.pipe(gulp.dest("./docs"));
});

//optimizes images compress all images by using imagemin plugin.
gulp.task('optimizeImages', ['deleteDistFolder'], function(){
	return gulp.src(['./app/assets/images/**/*', '!./app/assets/images/icons', '!./app/assets/images/icons/**/*'])
	.pipe(imagemin({
		progresssive: true,
		interlaced: true,
		multipass: true
	}))
	.pipe(gulp.dest("./docs/assets/images"));
});

gulp.task('useminTrigger', ['deleteDistFolder'], function() {
	gulp.start("usemin");
});

//cssnano and uglify creat minified code of css and js.
gulp.task('usemin', ['styles', 'scripts'], function(){
	return gulp.src("./app/index.html")
	.pipe(usemin({
		css: [function() {return rev()}, function() {return cssnano()}],
		js: [function() {return rev()}, function() {return uglify()}]
	}))
	.pipe(gulp.dest("./docs"));
});

//build task, whenever you creat new task that copy file from app into docs/dist, add that task-
//into build task.
gulp.task('build', ['deleteDistFolder', 'copyGeneralFiles', 'optimizeImages', 'useminTrigger']);