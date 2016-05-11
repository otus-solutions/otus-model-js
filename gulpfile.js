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
        gulp.src(['app/**/*-module.js', 'app/**/*.js', '!app/shared/**'])
            .pipe(concat('otus-model.js'))
            .pipe(minify({'mangle' : false}))
            .pipe(gulp.dest('dist'));

        gulp.src(['app/shared/st-utils/*-module.js', 'app/shared/st-utils/*.js'])
            .pipe(concat('st-utils.js'))
            .pipe(minify({'mangle' : false}))
            .pipe(gulp.dest('dist'));
    });

}());
