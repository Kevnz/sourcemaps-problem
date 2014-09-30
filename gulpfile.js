var gulp = require('gulp');
// include plug-ins 
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps'); 
var uglify = require('gulp-uglify'); 


gulp.task('default', function () {
	console.log('default the task')
    return gulp.src([
    	'/src/jQuery/jquery-2.1.0.js',
		'/src/jQueryPlugins/jquery.validate.js',
		'/src/jQueryPlugins/jquery.validate.unobtrusive.js',
		'/src/jQueryPlugins/jquery.selectbox-0.2.js',
		'/src/jQueryPlugins/jquery.simplemodal-1.4.4.js',
		'/src/jQueryPlugins/jquery.cycle.js'
	])
    .pipe(sourcemaps.init( )) 
      .pipe(concat('all.js')) 
    .pipe(sourcemaps.write())

    .pipe(gulp.dest('dist'));
      
});

gulp.task('javascript', function() {
  gulp.src('src/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(uglify())
      .pipe(concat('all.min.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist'));
});