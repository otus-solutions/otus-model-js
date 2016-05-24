(function() {

    var gulp = require('gulp');
    var bump = require('gulp-bump');
    var uglify = require("gulp-uglify");
    var minify = require('gulp-minify');
    var concat = require('gulp-concat');
    var sonar = require('gulp-sonar');
    var packageJson = require('./package.json');

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
            .pipe(minify({
                'mangle': false
            }))
            .pipe(gulp.dest('dist'));

        gulp.src(['app/shared/st-utils/*-module.js', 'app/shared/st-utils/*.js'])
            .pipe(concat('st-utils.js'))
            .pipe(minify({
                'mangle': false
            }))
            .pipe(gulp.dest('dist'));
    });

    gulp.task('sonar', function() {
        var options = {
            sonar: {
                host: {
                    url: process.env.npm_config_sonarUrl,
                },
                jdbc: {
                    url: process.env.npm_config_sonarDatabaseUrl,
                    username: process.env.npm_config_sonarDatabaseUsername,
                    password: process.env.npm_config_sonarDatabasePassword
                },
                projectKey: 'sonar:otus-model-js',
                projectName: 'otus-model-js',
                projectVersion: packageJson.version,
                // comma-delimited string of source directories
                sources: 'app',
                language: 'js',
                sourceEncoding: 'UTF-8',
                exec: {
                    maxBuffer: 1024 * 1024
                }
            }
        };

        return gulp.src('thisFileDoesNotExist.js', {
                read: false
            })
            .pipe(sonar(options));
    });


}());
