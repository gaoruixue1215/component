module.exports = function (grunt) {
    grunt.initConfig({
      htmlmin: {
        options: {
            removeComments:true,
            collapseWhitespace: true
        },
        files: {
            src: "./index.html",
            dest: "work/index.html"
        }
      },
      cssmin: {  
        'work/layout.css': 'layout.css'
      },
      uglify: {
        'work/main.js': 'main.js'       
      }
    });

    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
  
    grunt.registerTask('default', ['htmlmin','cssmin','uglify']);
 };

