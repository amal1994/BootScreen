var gulp = require('gulp'),
	sass = require('gulp-ruby-sass'),
	browserSync = require('browser-sync'),
	autoprefixer = require('gulp-autoprefixer'),
    compass = require('gulp-compass'),
    sourcemaps = require('gulp-sourcemaps');;

gulp.task('sass', function() {
	return sass('sass/style.scss',{sourcemap: true})
	.on('error', sass.logError).pipe(sourcemaps.write()).pipe(gulp.dest('css/'));
});

 /*gulp.task('compass', function() {
 	gulp.src('sass/*.scss')
 	.pipe(compass({
 		config_file: 'config.rb',
 		css: 'css',
 		sass: 'sass'
 	})) 	
 	.pipe(autoprefixer())
 	.pipe(gulp.dest('css'))
 })*/

//gulp.task('lint-css', function lintCssTask() {
//  const gulpStylelint = require('gulp-stylelint');
//  const myStylelintFormatter = require('my-stylelint-formatter');
// 
//  return gulp
//    .src('src/**.css')
//    .pipe(gulpStylelint({
//      failAfterError: true,
//      reportOutputDir: 'reports/lint',
//      reporters: [
//        {formatter: 'verbose', console: true},
//        {formatter: 'json', save: 'report.json'},
//        {formatter: myStylelintFormatter, save: 'my-custom-report.txt'}
//      ],
//      debug: true
//    }));
//});*/


gulp.task('watch', function(){
	gulp.watch('sass/*.scss' ,  ['sass']);
	gulp.watch('css/*.css' , browserSync.reload); 
	gulp.watch('**/*.html' , browserSync.reload); 
    gulp.watch('js/*.js' , browserSync.reload); 
  // Other watchers
})

gulp.task('browser-sync', function() {
	browserSync.init({
		server: {
			baseDir: "./"
		}
	});
});
gulp.task('default', ['watch','browser-sync']);