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

        concat: {
            options: {
                paths: ''
            },

            build: {
                options: {
                    noncmd: true
                },

                files: {
                    'dist/script/lib/seajs/2.1.1/sea.js': [
                        'src/script/lib/seajs/2.1.1/sea.js',
                        'src/script/lib/seajs/seajs-text/1.0.3/seajs-text.js',
                        'src/script/sea-config.js'
                    ]
                }
            }
        },

        copy: {
            dev: {
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: ['script/**/*.js', 'style/font/**', 'style/ec-nav/logos/*', 'templates/**'],
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
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-cmd-concat');

    // Default task(s).
    grunt.registerTask('style', ['less:dev']);
    grunt.registerTask('js', ['copy:dev', 'concat:build']);
    grunt.registerTask('default', ['style', 'js']);

};