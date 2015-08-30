module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    browserSync: {
      dev: {
        bsFiles: {
          src: [
            'css/main.css',
            'index.html'
          ]
        },
        options: {
          watchTask: true,
          server: {
            baseDir: "./"
          }
        }
      }
    },

    sass: {
      dev: {
        files: {
          'css/main.css': 'css/scss/main.scss'
        }
      }
    },

    watch: {
      files: 'css/scss/*.scss',
      tasks: ['sass']
    },

    wiredep: {
      dev: {
        src: 'index.html'
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-wiredep');

  // Default task(s).
  grunt.registerTask('default', ['sass', 'browserSync', 'watch']);
  grunt.registerTask('start', ['sass', 'wiredep']);

};