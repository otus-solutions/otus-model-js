(function() {

    var gulp = require('gulp');
    var bump = require('gulp-bump');
    var uglify = require("gulp-uglify");
    var minify = require('gulp-minify');
    var concat = require('gulp-concat');

    gulp.task('upgrade-version', function(value) {
        gulp.src('./package.json')
            .pipe(bump({
                version: process.env.npm_config_value
            }))
            .pipe(gulp.dest('./'));
    });

    gulp.task('compress', function() {
        gulp.src('app/**/*.js')
            .pipe(concat('otus-model.js'))
            .pipe(uglify())
            .pipe(minify())
            .pipe(gulp.dest('dist'));
    });

}());
