module.exports = function (grunt) {
    grunt.initConfig({
        ngtemplates: {
            myapp: {
                options: {
                    module: 'templateCache',
					prefix: '/',
					standalone: true
                },
                cwd: 'src',
                src: "views/**/*.html",
                dest: "dist/js/templates.js"
            },
        } 
    });
    
    grunt.loadNpmTasks('grunt-angular-templates');
    grunt.registerTask('default',['ngtemplates']);
};