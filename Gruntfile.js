'use strict';
var path = require('path');
var lrSnippet = require('grunt-contrib-livereload/lib/utils').livereloadSnippet;

var folderMount = function folderMount(connect, point) {
  return connect.static(path.resolve(point));
};

module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    clean: {
      build: {
        src: [".sass-cache"]
      }
    }, // end clean

    sass: {
      dist: {
        options: {
          style: 'expanded',
          noCache: true
        },
        files: {
          'app/production/css/style.css': 'app/scss/style.scss'
        }
      }
    }, // end sass

    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'app/production/css',
          src: ['*.css', '!*.min.css'],
          dest: 'app/production/css',
          ext: '.min.css'
        }]
      }
    }, //end cssmin

    connect: {
      server: {
        options: {
          port: 8000
        }
      }
    }, // end connect

    uglify: {
      options: {
        mangle: false
      },
      my_target: {
        files: {
          'app/production/js/app.min.js': ['app/js/module.js', 'app/js/config.js', 'app/js/factory.js', 'app/js/filter.js', 'app/js/PotatoAppController.js']
        }
      }
    }, // end js minify

    watch: { // this is a watcher, to run this in terminal write: grunt watch
      options: {
        dateFormat: function(time) {
          grunt.log.writeln('The watch finished in ' + time + 'ms at' + (new Date()).toString());
          grunt.log.writeln('Waiting for new changes ...');
        },
        livereload: true
      },

      css: {
        files: 'app/scss/style.scss',
        tasks: ['sass', 'cssmin']
      },

      jsmin: {
        files: 'app/js/*.js',
        tasks: ['uglify']
      },

      html: {
            files: ['app/views/**/*.html'],
            options: {
                livereload: true
            }
        }
    } // end watch
  });

  grunt.loadNpmTasks('grunt-contrib-watch');    // Load the plugin that provides the "watch" task.
  grunt.loadNpmTasks('grunt-contrib-cssmin');   // Load the plugin that provides the "cssmin" task.
  grunt.loadNpmTasks('grunt-contrib-sass');   // Load the plugin that provides the "sass" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');   // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-livereload'); // Load the plugin that provides the "livereload" task.
  grunt.loadNpmTasks('grunt-contrib-connect');  // Load the plugin that provides the "connect" task.
  grunt.loadNpmTasks('grunt-contrib-clean');    // Load the plugin that provides the "clean" task.

  grunt.registerTask('default', ['connect','watch']);   // this is the default command, use in terminal 'grunt'
  grunt.registerTask('dev', ['connect', 'sass', 'cssmin', 'uglify', 'clean', 'watch']);  // use 'grunt dev' for development
};
