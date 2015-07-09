module.exports = function (grunt, config) {
  grunt.config.merge({

  // https://github.com/sindresorhus/grunt-sass
    sass: {
      options: {
      },
      dist: {
        src: config.scssDir + 'style.scss',
        dest: config.cssDir + 'style.css',
      }
    },

    // https://github.com/gruntjs/grunt-contrib-watch
    watch: {
      sass: {
      	files: config.scssDir + "**/*.scss",
      	tasks: [
      	  "sass"
      	],
        options: {
          livereload: true,
          port: 1337
        }
      },
    },
    connect: {
      server: {
        options: {
         livereload: 1337,
         port: 9001,
         hostname: '0.0.0.0',
         base: './',
         open: {
           target: 'http://localhost:9001', // target url to open
         }
        }
      }
    }
  });
};
