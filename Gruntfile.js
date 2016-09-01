'use strict';
module.exports = function (grunt) {

    var path = require('path');

    require('load-grunt-config')(grunt, {
        configPath: path.join(process.cwd(), 'grunt/config'),

        init: true,

        jitGrunt: {
            customTasksDir: 'grunt/tasks',
            staticMappings: {
                projectDefault: 'grunt/tasks/default.js'
            }


        }
    });

    //grunt.registerTask('default', ['watch:scripts']);
    grunt.registerTask('default', ['projectDefault']);
    grunt.registerTask('testStack', ['browserify']);

};
