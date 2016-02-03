module.exports = function (grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    eslint: {
        target: ['./lib/*.js']
    },
    browserify: {
      dist: {
        options: {
          transform: [ ['babelify', { 'presets': ['es2015'] }] ]
        },
        files: {
          './dist/module.js': ['./lib/index.js']
        }
      }
    },
    watch: {
      scripts: {
        files: ['./lib/*.js', 'index-test.html'],
        tasks: ['browserify']
      }
    }
  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['eslint', 'watch']);
  grunt.registerTask('build', ['eslint', 'browserify']);
};
