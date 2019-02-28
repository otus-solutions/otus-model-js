(function() {

  const DEST = 'dist/';

  const gulp = require('gulp');
  const bump = require('gulp-bump');
  const babel = require('gulp-babel');
  const uglify = require("gulp-uglify");
  const concat = require('gulp-concat');
  const sonar = require('gulp-sonar');
  const rename = require('gulp-rename');
  const packageJson = require('./package.json');

  gulp.task('compress', function() {
    gulp.src(['app/**/*-module.js', 'app/**/*.js', '!app/shared/**'])
      .pipe(babel())
      .pipe(concat('otus-model.js'))
      .pipe(gulp.dest(DEST))
      .pipe(uglify())
      .pipe(rename({
        extname: '.min.js'
      }))
      .pipe(gulp.dest(DEST));

    gulp.src(['app/shared/st-utils/*-module.js', 'app/shared/st-utils/*.js'])
      .pipe(concat('st-utils.js'))
      .pipe(gulp.dest(DEST))
      .pipe(uglify())
      .pipe(rename({
        extname: '.min.js'
      }))
      .pipe(gulp.dest(DEST));
  });

  gulp.task('upgrade-version', function(value) {
    gulp.src('./package.json')
      .pipe(bump({
        version: process.env.npm_config_value
      }))
      .pipe(gulp.dest('./'));
  });

  gulp.task('sonar', function() {
    var options = {
      sonar: {
        host: {
          url: process.env.npm_config_sonarUrl,
        },
        login: process.env.npm_config_sonarDatabaseUsername,
          password: process.env.npm_config_sonarDatabasePassword,
          projectKey: 'sonar:' + packageJson.name,
          projectName: packageJson.name,
          projectVersion: packageJson.version,
          sources: 'app',
          language: 'js',
          sourceEncoding: 'UTF-8',
          exec: {
            maxBuffer: 1024 * 1024
          },
          javascript: {
            lcov: {
              reportPath: 'target/test-coverage/report-lcov/lcov.info'
            }
          }
        }
    };

    return gulp.src('thisFileDoesNotExist.js', {
        read: false
      })
      .pipe(sonar(options));
  });
}());
