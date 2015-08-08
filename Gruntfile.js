module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    connect: {
      server: {
        port: 9001,
        base: 'app'
      }
    }
  });

  grunt.loadNpmTasks('grunt-connect');

  grunt.registerTask('default', ['connect:server']);
}
