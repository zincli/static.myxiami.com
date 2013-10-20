/**
 * Created with JetBrains PhpStorm.
 * User: Administrator
 * Date: 13-10-14
 * Time: 下午11:38
 * To change this template use File | Settings | File Templates.
 */
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'src/script/**/*.js',
                dest: 'build/<%= pkg.name %>.min.js'
            }
        },

        copy: {
            dev: {
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: ['script/**/*.js', 'style/font/**', 'templates/**'],
                    dest: 'dist'
                }]
            }
        },

        less: {
            dev: {
                options: {
                    paths: ["src/style"]
                },
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: ['**/*.less', '!style/lib/**/*.less'],
                    dest: 'dist/',
                    ext: '.css'
                }]
            },
            build: {
                options: {
                    paths: ["src/style"],
                    yuicompress: true
                },
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: ['**/*.less', '!style/lib/**/*.less'],
                    dest: 'dist/',
                    ext: '.css'
                }]
            }
        },

        watch: {
            files: 'src/style/**/*.less',
            tasks: ['style'],
            options: {
                interrupt: true,
                debounceDelay: 250
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // Default task(s).
    grunt.registerTask('default', ['copy']);
    grunt.registerTask('style', ['less:dev']);

};