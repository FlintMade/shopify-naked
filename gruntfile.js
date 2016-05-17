module.exports = function(grunt) {

  var globalConfig = {
    src: 'styles' // your dev stylesheet directory. No trailing slash
  };

  var gulp = require('gulp');
  var sass = require('gulp-sass');
  var plumber = require('gulp-plumber');
  var autoprefixer = require('gulp-autoprefixer');

  grunt.initConfig({
    exec: {
      theme_watch: {
        command: 'theme watch'
      }
    },

    gulp: {
      concat: function() {
        return gulp.src(globalConfig.src + '/**/[^_]*.*')
          .pipe(sass({
            style: 'compressed',
            errLogToConsole: true,
          }))
          .pipe(plumber.stop())
          .pipe(autoprefixer({
              browsers: ['last 2 versions'],
              cascade: false
          }))
          .pipe(gulp.dest('assets/'));
      }
    },

    watch: {
      gulp: {
        files: globalConfig.src + '/**/*.*',
        tasks: ['gulp']
      }
    },

    concurrent: {
      options: {
        logConcurrentOutput: true
      },
      watch: {
        tasks: ['watch', 'exec']
      }
    }
  });

  require('load-grunt-tasks')(grunt);
  grunt.registerTask ('default', ['concurrent:watch']);
};
