module.exports = function(grunt) {

        grunt.initConfig({
                pkg: grunt.file.readJSON('package.json'),
               
                watch: {
                    src: {
                      files: ['*.html', 'js/*.js', 'styles/*/*.css', 'controllers/*.js', 'views/*.html'],
                      options: { livereload: true  }   
                    }
                 },
 
                connect: {
                        server: {
                                port: 1337,
                                livereload: true,
                                base: '.'
                        }
                }
        });
 
        grunt.loadNpmTasks('grunt-contrib-watch');
        grunt.loadNpmTasks('grunt-contrib-connect');
 
        grunt.registerTask('default', ['connect:server', 'watch']);
    
};
