'use strict';
module.exports = function ( grunt ) {

    // Globule to filter npm module dependencies by name.
    require('matchdep').filterDev('grunt-*').forEach( grunt.loadNpmTasks );

    // Require modrewrite.
    var modRewrite = require('connect-modrewrite');

    grunt.initConfig({
        connect: {
            options: {
                hostname: 'localhost',
                middleware: function (connect, options) {
                    var middlewares = [];
                    middlewares.push(modRewrite(['^[^\\.]*$ /index.html [L]']));
                    options.base.forEach(function (base) {
                        middlewares.push(connect.static(base));
                    });
                    return middlewares;
                }
            },
            dev: {
                options:{
                    keepalive:  true,
                    open:       true
                }
            }
        },
        uglify: {
            dev: {
                files: {
                    'dist/js/app.min.js': [
                        'app/js/app.js',
                        'app/js/controllers/*.js',
                    ]
                }
            }
        },
        cssmin: {
            dev: {
                files: {
                    'dist/css/app.min.css': [
                        'app/css/app.css',
                    ]
                }
            }
        }
    });

    grunt.registerTask('init', ['build', 'connect:dev']);
    grunt.registerTask('build', ['uglify:dev','cssmin:dev']);
}
